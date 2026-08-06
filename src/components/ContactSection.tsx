import { assets } from "../assets";

const whatsappUrl =
  "https://wa.me/5531900000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento.";

const contactItems = [
  {
    icon: assets.contactWhatsapp,
    title: "Agendamento via WhatsApp",
    text: "(31) 9 0000-0000",
    href: whatsappUrl,
    width: 20,
    height: 20,
    tone: "primary",
  },
  {
    icon: assets.contactLocation,
    title: "Localização",
    text: "Av. das Clínicas, 1000 - Sala 402, Belo Horizonte - MG",
    width: 16,
    height: 20,
    tone: "green",
  },
  {
    icon: assets.contactClock,
    title: "Horário de Atendimento",
    text: "Segunda a Sexta: 08:00 às 18:00",
    width: 20,
    height: 20,
    tone: "blue",
  },
];

const plans = ["UNIMED", "BRADESCO", "SULAMÉRICA", "PARTICULAR"];

export function ContactSection() {
  return (
    <section className="contact-section section section-white" id="contato" aria-labelledby="contato-title">
      <div className="section-shell contact-shell">
        <div className="contact-copy">
          <h2 id="contato-title">
            Vamos cuidar da sua <em>visão</em>?
          </h2>
          <p>
            Escolha o canal de sua preferência para agendar sua consulta ou
            tirar dúvidas sobre o atendimento.
          </p>
          <div className="contact-list">
            {contactItems.map((item) => {
              const content = (
                <>
                  <span className={`contact-icon ${item.tone}`}>
                    <img
                      src={item.icon}
                      alt=""
                      style={{ width: item.width, height: item.height }}
                    />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                </>
              );

              return item.href ? (
                <a className="contact-card" href={item.href} key={item.title}>
                  {content}
                </a>
              ) : (
                <article className="contact-card" key={item.title}>
                  {content}
                </article>
              );
            })}
          </div>
        </div>
        <div className="contact-visual">
          <div className="map-card" aria-label="Mapa de Belo Horizonte">
            <img src={assets.contactMap} alt="" />
            <span aria-hidden="true" />
          </div>
          <div className="plans-card">
            <h3>PLANOS ACEITOS</h3>
            <div>
              {plans.map((plan) => (
                <span key={plan}>{plan}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
