import { useEffect, useState } from "react";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#formacao", label: "Formação" },
  { href: "#educacao", label: "Educação" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [activeId, setActiveId] = useState("");

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
        <a className="brand" href="#inicio" aria-label="Ir para o início">
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
