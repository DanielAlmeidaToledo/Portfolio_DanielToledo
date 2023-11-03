import NumberAnimation from "../NumberAnimation/NumberAnimation";
import { GoPlusSmall } from "react-icons/go";

import "./aboutcontainer.sass";

const Informations = [
  { title: "Projetos Freelancers", value: 5 },
  { title: "Projetos Pessoais", value: 33 },
  { title: "Commits", value: 617 },
  { title: "Certificados", value: 12 },
];

const AboutContainer = () => {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <p>
        Meu nome é Daniel Almeida de Toledo, tenho 21 anos e moro no interior de
        São Paulo, mais precisamente na cidade de Boituva. Mas não quero deixar
        essa seção de Sobre entediante, então por isso vou relatar um pouco
        sobre quem sou eu, a minha personalidade e como isso influencia em
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
