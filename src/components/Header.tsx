import { type MouseEvent, useEffect, useState } from "react";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#formacao", label: "Formação" },
  { href: "#educacao", label: "Educação" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const scrollCancelKeys = new Set([
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Home",
  "PageDown",
  "PageUp",
  " ",
]);

let cancelActiveScroll: (() => void) | null = null;

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

function animateScrollTo(targetTop: number, shouldReduceMotion: boolean) {
  cancelActiveScroll?.();

  if (shouldReduceMotion) {
    window.scrollTo(0, targetTop);
    cancelActiveScroll = null;
    return;
  }

  const startTop = window.scrollY;
  const distance = targetTop - startTop;

  if (Math.abs(distance) < 4) {
    window.scrollTo(0, targetTop);
    cancelActiveScroll = null;
    return;
  }

  const duration = Math.min(760, Math.max(420, Math.abs(distance) * 0.24));
  let animationFrame = 0;
  let startTime = 0;

  const cleanup = () => {
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("keydown", handleKeyDown);
  };

  const finish = () => {
    cleanup();
    cancelActiveScroll = null;
  };

  const cancel = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }

    finish();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (scrollCancelKeys.has(event.key)) {
      cancel();
    }
  };

  const step = (timestamp: number) => {
    if (!startTime) {
      startTime = timestamp;
    }

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const nextTop = startTop + distance * easeOutCubic(progress);

    window.scrollTo(0, nextTop);

    if (progress < 1) {
      animationFrame = window.requestAnimationFrame(step);
      return;
    }

    window.scrollTo(0, targetTop);
    finish();
  };

  cancelActiveScroll = cancel;
  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("keydown", handleKeyDown);
  animationFrame = window.requestAnimationFrame(step);
}

export function Header() {
  const [activeId, setActiveId] = useState("");

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
    ) {
      return;
    }

    const target = document.getElementById(href.slice(1));

    if (!target) {
      return;
    }

    event.preventDefault();

    const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 16);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldTrackAsActive = navItems.some((item) => item.href === href);

    window.history.pushState(null, "", href);
    animateScrollTo(top, prefersReducedMotion);

    setActiveId(shouldTrackAsActive ? href.slice(1) : "");
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;

      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      const activationLine = headerHeight + window.innerHeight * 0.32;
      const isNearPageEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      const nextActiveId = isNearPageEnd
        ? sections[sections.length - 1].id
        : sections.reduce((currentId, section) => {
            const sectionTop = section.getBoundingClientRect().top;

            return sectionTop <= activationLine ? section.id : currentId;
          }, "");

      setActiveId((currentId) => (
        currentId === nextActiveId ? currentId : nextActiveId
      ));
    };

    const requestActiveSectionUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    requestActiveSectionUpdate();
    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", requestActiveSectionUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestActiveSectionUpdate);
      window.removeEventListener("resize", requestActiveSectionUpdate);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegação principal">
        <a
          aria-label="Ir para o início"
          className="brand"
          href="#inicio"
          onClick={(event) => handleAnchorClick(event, "#inicio")}
        >
          Dra. Thayna Maia Alves
        </a>
        <div className="nav-links">
          {navItems.map((item) => {
            const itemId = item.href.slice(1);
            const isActive = activeId === itemId;

            return (
              <a
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "active" : undefined}
                href={item.href}
                key={item.href}
                onClick={(event) => handleAnchorClick(event, item.href)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
