const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#formacao", label: "Formação" },
  { href: "#educacao", label: "Educação" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          Dra. Thayna Maia Alves
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
