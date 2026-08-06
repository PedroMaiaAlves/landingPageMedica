import { assets } from "../assets";

const commitments = [
  {
    icon: assets.aboutEthics,
    title: "Ética Profissional",
    description: "Compromisso total com o bem-estar e a verdade médica.",
    width: 16.667,
    height: 16.667,
  },
  {
    icon: assets.aboutHumanization,
    title: "Humanização",
    description: "Atendimento acolhedor para reduzir a ansiedade do paciente.",
    width: 15.843,
    height: 16.667,
  },
];

export function AboutSection() {
  return (
    <section className="about-section section" id="sobre" aria-labelledby="sobre-title">
      <div className="section-shell about-shell">
        <div className="about-collage" aria-label="Ambientes de atendimento e formação">
          <div className="about-oval" aria-hidden="true" />
          <div className="collage-column collage-column-lower">
            <img className="collage-image" src={assets.aboutDesk} alt="" />
            <div className="residency-card">
              <strong>R3</strong>
              <span>ANO DE RESIDÊNCIA</span>
            </div>
          </div>
          <div className="collage-column">
            <div className="academic-card">
              <img
                src={assets.aboutAcademic}
                alt=""
                style={{ width: 32.5, height: 26.667 }}
              />
              <p>
                Formada com excelência e dedicação acadêmica constante.
              </p>
            </div>
            <img className="collage-image" src={assets.aboutClinic} alt="" />
          </div>
        </div>
        <div className="about-copy">
          <h2 id="sobre-title">
            Cuidado que começa pela <em>escuta</em>
          </h2>
          <div className="title-rule" aria-hidden="true" />
          <p className="about-lead">
            Minha jornada na medicina sempre foi guiada pela busca por um
            atendimento que enxergue além do sintoma. Como médica residente no
            último ano de Oftalmologia, entendo que a visão é um dos nossos
            sentidos mais preciosos e merece um cuidado meticuloso.
          </p>
          <p>
            Minha prática clínica é fundamentada na atualização científica
            constante e no respeito à individualidade de cada paciente. Acredito
            que o diagnóstico preciso nasce da combinação entre tecnologia de
            ponta e uma conversa atenta no consultório.
          </p>
          <div className="commitment-list">
            {commitments.map((item) => (
              <article className="commitment-item" key={item.title}>
                <span className="round-icon">
                  <img
                    src={item.icon}
                    alt=""
                    style={{ width: item.width, height: item.height }}
                  />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
