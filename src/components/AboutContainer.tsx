import NumberAnimation from "./NumberAnimation";
import { GoPlusSmall } from "react-icons/go";

import "../styles/components/aboutcontainer.sass";

const Informations = [
  { title: "Freelancers", value: 3 },
  { title: "Projetos", value: 27 },
  { title: "Commits", value: 282 },
  { title: "Cursos e Certificados", value: 11 },
];

const AboutContainer = () => {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <p>
        Meu nome é Daniel Almeida de Toledo, tenho 20 anos e moro no interior de
        São Paulo, mais precisamente na cidade de Boituva. Mas não quero deixar
        essa seção de Sobre entediante, então por isso vou relatar um pouco
        sobre quem sou eu, a minha personalidade e como isso influência em
        minhas atividades.
      </p>
      <p>
        Sou muito focado, determinado e disciplinado. Sempre tento de tudo para
        solucionar problemas e adversidades, se eu não sei, faço de tudo para
        aprender. Se não está em meu alcance, procuro pessoas que saibam
        resolver e me auxiliar. Acredito que mais importante que o desempenho
        individual, seja o trabalho de um time por completo, a comunicação entre
        ele e a sua eficiência.
      </p>
      <div className="projects-grid">
        {Informations.map((info) => {
          return (
            <div className="projects-card" key={info.title}>
              <div className="projects-info">
                <GoPlusSmall />
                <NumberAnimation value={info.value} />
              </div>
              <h3>{info.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutContainer;
