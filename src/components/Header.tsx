import { useEffect, useRef, useState } from "react";

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
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const sectionRatios = useRef<Record<string, number>>({});

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.current[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });

        const visibleSection = navItems
          .map((item) => {
            const id = item.href.slice(1);

            return {
              id,
              ratio: sectionRatios.current[id] ?? 0,
            };
          })
          .sort((a, b) => b.ratio - a.ratio)[0];

        if (visibleSection?.ratio > 0) {
          setActiveId((currentId) => (
            currentId === visibleSection.id ? currentId : visibleSection.id
          ));
        }
      },
      {
        rootMargin: "-24% 0px -58% 0px",
        threshold: [0.08, 0.18, 0.32, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    linkRefs.current[activeId]?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  }, [activeId]);

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
                ref={(node) => {
                  linkRefs.current[itemId] = node;
                }}
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
