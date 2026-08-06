import { assets } from "../assets";

const trustItems = [
  {
    icon: assets.trustResidence,
    title: "Residência Médica",
    description: "3 anos de especialização intensiva",
    width: 29.333,
    height: 24,
  },
  {
    icon: assets.trustUpdate,
    title: "Atualização Contínua",
    description: "Protocolos e congressos mundiais",
    width: 24,
    height: 24,
  },
  {
    icon: assets.trustIndividual,
    title: "Individualizado",
    description: "Plano terapêutico personalizado",
    width: 27.333,
    height: 26,
  },
  {
    icon: assets.trustCommunication,
    title: "Comunicação Clara",
    description: 'Explicações sem "medicalês"',
    width: 26.667,
    height: 26.667,
  },
];

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Diferenciais de confiança">
      <div className="trust-grid">
        {trustItems.map((item) => (
          <article className="trust-item" key={item.title}>
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
