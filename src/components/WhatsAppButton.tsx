import { assets } from "../assets";

const whatsappUrl =
  "https://wa.me/5531900000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento.";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      aria-label="Agendar atendimento pelo WhatsApp"
    >
      <img src={assets.contactWhatsapp} alt="" style={{ width: 20, height: 20 }} />
      <span>WhatsApp</span>
    </a>
  );
}
