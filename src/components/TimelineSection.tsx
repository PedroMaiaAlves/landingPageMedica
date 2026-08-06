import { assets } from "../assets";

const timelineItems = [
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
  return (
    <section className="timeline-section section" id="formacao" aria-labelledby="formacao-title">
      <div className="section-shell">
        <h2 className="center-heading" id="formacao-title">
          Trajetória e <span>Formação</span>
        </h2>
        <div className="timeline" aria-label="Linha do tempo de formação">
          {timelineItems.map((item) => (
            <article className={`timeline-item timeline-${item.side}`} key={item.title}>
              <div className="timeline-content">
                <h3 style={{ color: item.color }}>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="timeline-marker" style={{ backgroundColor: item.color }}>
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt=""
                    style={{ width: 16.667, height: 15.833 }}
                  />
                ) : null}
              </div>
              <span className={item.date === "Atualidade" ? "date-chip current" : "date-chip"}>
                {item.date}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
