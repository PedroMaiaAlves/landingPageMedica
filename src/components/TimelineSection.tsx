import { motion, useReducedMotion } from "framer-motion";
import { assets } from "../assets";

const timelineItems: Array<{
  title: string;
  description: string;
  date: string;
  side: "left" | "right";
  color: string;
  icon?: string;
}> = [
  {
    title: "Graduação em Medicina",
    description: "Formação com ênfase em clínica geral e propedêutica humanizada.",
    date: "2012 — 2018",
    side: "left",
    color: "#00535b",
  },
  {
    title: "Atuação em Atenção Básica",
    description: "Experiência prática no cuidado integral ao paciente e saúde da família.",
    date: "2019 — 2021",
    side: "right",
    color: "#236863",
  },
  {
    title: "Residência em Oftalmologia (R3)",
    description: "Especialização técnica avançada em hospital de referência regional.",
    date: "Atualidade",
    side: "left",
    color: "#006d77",
    icon: assets.timelineStar,
  },
];

export function TimelineSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="timeline-section section" id="formacao" aria-labelledby="formacao-title">
      <div className="section-shell">
        <h2 className="center-heading" id="formacao-title">
          Trajetória e <span>Formação</span>
        </h2>
        <div className="timeline" aria-label="Linha do tempo de formação">
          <motion.span
            aria-hidden="true"
            className="timeline-line"
            initial={shouldReduceMotion ? false : { scaleY: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ amount: 0.35, once: true }}
            whileInView={shouldReduceMotion ? undefined : { scaleY: 1 }}
          />
          {timelineItems.map((item, index) => (
            <motion.article
              className={`timeline-item timeline-${item.side}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              key={item.title}
              transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
              viewport={{ amount: 0.4, once: true }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <div className="timeline-content">
                <h3 style={{ color: item.color }}>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <motion.div
                className="timeline-marker"
                initial={shouldReduceMotion ? false : { scale: 0.78 }}
                style={{ backgroundColor: item.color }}
                transition={{ delay: index * 0.08 + 0.12, duration: 0.35, ease: "easeOut" }}
                viewport={{ amount: 0.4, once: true }}
                whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
              >
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt=""
                    style={{ width: 16.667, height: 15.833 }}
                  />
                ) : null}
              </motion.div>
              <span className={item.date === "Atualidade" ? "date-chip current" : "date-chip"}>
                {item.date}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
