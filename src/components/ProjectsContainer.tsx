import NumberAnimation from "./NumberAnimation";
import { HiPlus } from "react-icons/hi";

import "../styles/components/projectscontainer.sass";

const Informations = [
  { title: "Freelancers", value: 3 },
  { title: "Projetos", value: 27 },
  { title: "Commits", value: 320 },
  { title: "Cursos e Certificados", value: 5 },
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {Informations.map((info) => {
          return (
            <div className="projects-card" key={info.title}>
              <h3>{info.title}</h3>
              <HiPlus />
              <NumberAnimation value={info.value} />
            </div>
          );
        })}
      </div>
      <p>
        Constantemente gosto de criar novos projetos e até mesmo aprimorar
        projetos antigos, buscando sempre uma otimização de códigos e uma
        eficácia maior quanto o assunto é programação. Acesse agora mesmo o meu
        repositório no Github contendo todos os meus projetos, inclusive esse,
        que foi desenvolvido utilizando React.JS e Sass.
      </p>
    </section>
  );
};

export default ProjectsContainer;
