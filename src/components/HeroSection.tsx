import { motion, useReducedMotion } from "framer-motion";
import { assets } from "../assets";

const whatsappUrl =
  "https://wa.me/5531900000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento.";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const revealInitial = shouldReduceMotion ? false : { opacity: 0, y: 28 };
  const revealAnimate = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="hero-blur" aria-hidden="true" />
      <div className="hero-ring" aria-hidden="true">
        <span />
        <span />
      </div>
      <img
        className="hero-pattern"
        src={assets.heroPattern}
        alt=""
        aria-hidden="true"
      />
      <div className="hero-shell">
        <motion.div
          animate={revealAnimate}
          className="hero-copy"
          initial={revealInitial}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">
            <span aria-hidden="true" />
            OFTALMOLOGIA ESPECIALIZADA
          </p>
          <h1 id="hero-title">
            Cuidado atento para a
            <em>saúde dos seus olhos</em>
          </h1>
          <p className="hero-description">
            Uma abordagem humanizada que une o rigor técnico da residência
            médica à empatia necessária para compreender as suas necessidades
            visuais.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl}>
              <span>Agendar atendimento</span>
              <img
                src={assets.heroCalendar}
                alt=""
                style={{ width: 15, height: 16.667 }}
              />
            </a>
            <a className="button button-secondary" href="#formacao">
              Conheça minha trajetória
            </a>
          </div>
        </motion.div>
        <motion.div
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          aria-label="Dra. Thayna Maia Alves"
          className="hero-media"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
        >
          <figure className="doctor-card">
            <img src={assets.heroDoctor} alt="Dra. Thayna Maia Alves" />
            <figcaption>
              <span>Dra. Thayna Maia Alves</span>
              <span>CRM MG 91465 | Oftalmologia</span>
            </figcaption>
          </figure>
          <aside className="resident-badge" aria-label="Residente R3">
            <div>
              <img
                src={assets.heroBadge}
                alt=""
                style={{ width: 22, height: 21 }}
              />
              <strong>Residente R3</strong>
            </div>
            <p>
              Especialização avançada
              <br />
              em Hospital de Referência.
            </p>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
