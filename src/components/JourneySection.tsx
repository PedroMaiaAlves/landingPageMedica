const journeySteps = [
  {
    number: "01",
    title: "Agendamento",
    description: "Escolha o melhor horário via WhatsApp ou telefone.",
  },
  {
    number: "02",
    title: "Avaliação",
    description: "Consulta presencial detalhada com exames iniciais.",
  },
  {
    number: "03",
    title: "Orientação",
    description: "Definição do plano de cuidado e prescrições necessárias.",
  },
];

export function JourneySection() {
  return (
    <section className="journey-section section" aria-labelledby="jornada-title">
      <h2 className="center-heading" id="jornada-title">
        Sua jornada de <em>cuidado</em>
      </h2>
      <div className="journey-track">
        {journeySteps.map((step) => (
          <article className="journey-step" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
