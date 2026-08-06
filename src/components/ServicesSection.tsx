import { motion, useReducedMotion } from "framer-motion";
import { assets } from "../assets";

const services = [
  {
    icon: assets.serviceEye,
    title: "Avaliação Ocular",
    description:
      "Exame clínico completo para detecção de ametropias (grau) e patologias oculares iniciais.",
    width: 29.333,
    height: 20,
  },
  {
    icon: assets.serviceMonitor,
    title: "Acompanhamento Visual",
    description:
      "Monitoramento de condições crônicas e prevenção de doenças degenerativas da visão.",
    width: 26.667,
    height: 21.333,
  },
  {
    icon: assets.serviceShield,
    title: "Orientação Preventiva",
    description:
      "Educação sobre hábitos saudáveis e proteção ocular no uso de telas e ambientes adversos.",
    width: 21.333,
    height: 26.667,
  },
  {
    icon: assets.serviceChild,
    title: "Triagem Pediátrica",
    description:
      "Identificação precoce de distúrbios visuais que podem afetar o desenvolvimento escolar.",
    width: 24,
    height: 24,
  },
  {
    icon: assets.servicePrescription,
    title: "Prescrição Terapêutica",
    description:
      "Indicação precisa de colírios e tratamentos medicamentosos para diversas afecções.",
    width: 18.667,
    height: 24,
  },
  {
    icon: assets.serviceReport,
    title: "Laudos e Pareceres",
    description:
      "Emissão de documentos técnicos para perícias, concursos e avaliações ocupacionais.",
    width: 26.667,
    height: 26.667,
  },
];

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="services-section section section-white" id="servicos" aria-labelledby="servicos-title">
      <div className="section-shell">
        <div className="section-heading-row">
          <div>
            <h2 id="servicos-title">Serviços e Cuidados</h2>
            <p>Acompanhamento completo para todas as fases da sua saúde visual.</p>
          </div>
          <span className="section-chip">Expertise em Oftalmologia</span>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              key={service.title}
              transition={{ delay: index * 0.05, duration: 0.45, ease: "easeOut" }}
              viewport={{ amount: 0.25, once: true }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <span className="service-icon">
                <img
                  src={service.icon}
                  alt=""
                  style={{ width: service.width, height: service.height }}
                />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
