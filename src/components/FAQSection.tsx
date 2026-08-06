import { assets } from "../assets";

const faqs = [
  {
    question: "Quais convênios a Dra. Thayna atende?",
    answer: "Os planos listados na página são UNIMED, BRADESCO, SULAMÉRICA e PARTICULAR.",
  },
  {
    question: "Onde são realizados os atendimentos?",
    answer: "O endereço informado é Av. das Clínicas, 1000 - Sala 402, Belo Horizonte - MG.",
  },
  {
    question: "É necessário dilatar a pupila em todas as consultas?",
    answer:
      "Essa orientação é informada no atendimento, de acordo com a avaliação individual da consulta.",
  },
];

export function FAQSection() {
  return (
    <section className="faq-section section" id="faq" aria-labelledby="faq-title">
      <div className="faq-shell">
        <h2 id="faq-title">Dúvidas Frequentes</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <img
                  src={assets.faqChevron}
                  alt=""
                  style={{ width: 12, height: 7.4 }}
                />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
