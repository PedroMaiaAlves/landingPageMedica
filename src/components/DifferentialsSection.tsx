import { assets } from "../assets";

const differentials = [
  {
    icon: assets.diffListen,
    title: "Escuta Ativa",
    description: "Tempo dedicado para entender o seu histórico.",
    width: 62,
    height: 66.667,
  },
  {
    icon: assets.diffExplain,
    title: "Explicações",
    description: "Clareza sobre o diagnóstico e cada etapa do tratamento.",
    width: 68.667,
    height: 63.583,
  },
  {
    icon: assets.diffCare,
    title: "Cuidado Real",
    description: "Acompanhamento próximo mesmo após a consulta.",
    width: 65.333,
    height: 62.583,
  },
  {
    icon: assets.diffUpdate,
    title: "Atualização",
    description: "Prática baseada em evidências científicas modernas.",
    width: 68.667,
    height: 64.5,
  },
];

export function DifferentialsSection() {
  return (
    <section className="differentials-section" aria-label="Diferenciais do atendimento">
      <div className="section-shell differentials-grid">
        {differentials.map((item) => (
          <article className="differential-item" key={item.title}>
            <img
              src={item.icon}
              alt=""
              style={{ width: item.width, height: item.height }}
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
