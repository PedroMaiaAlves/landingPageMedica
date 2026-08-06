import { assets } from "../assets";

const posts = [
  {
    image: assets.blogGlasses,
    category: "PREVENÇÃO",
    title: "Mitos e verdades sobre o uso de óculos de grau",
    description:
      'Entenda se o uso constante dos óculos pode "viciar" a sua visão ou se é apenas…',
  },
  {
    image: assets.blogComputer,
    category: "SAÚDE DIGITAL",
    title: "Síndrome da visão de computador: como evitar",
    description:
      "Dicas práticas para quem trabalha longas horas em frente às telas e sente cansaço…",
  },
  {
    image: assets.blogNutrition,
    category: "NUTRIÇÃO",
    title: "Alimentos que auxiliam na proteção da retina",
    description:
      "Conheça as vitaminas essenciais para manter uma visão nítida por muito mais…",
  },
];

export function EducationSection() {
  return (
    <section className="education-section section" id="educacao" aria-labelledby="educacao-title">
      <div className="section-shell">
        <div className="education-heading">
          <h2 id="educacao-title">
            Educação e <em>Saúde</em>
          </h2>
          <a href="#faq">
            Ver todos os artigos
            <img
              src={assets.educationArrow}
              alt=""
              style={{ width: 16, height: 16 }}
            />
          </a>
        </div>
        <div className="post-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.title}>
              <img src={post.image} alt="" />
              <div className="post-body">
                <p className="post-category">{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
