import Carousel from "./Carousel";

import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Constantemente gosto de criar novos projetos e até mesmo aprimorar
        projetos antigos, buscando sempre uma otimização de códigos e uma
        eficácia maior quanto o assunto é programação. Acesse agora mesmo o meu
        repositório no Github contendo todos os meus projetos, inclusive esse,
        que foi desenvolvido utilizando React.JS e Sass.
      </p>
      <Carousel />

      <a
        href="https://github.com/DanielAlmeidaToledo"
        className="btn btnGithub"
        target={"_blank"}
      >
        Acessar Github
      </a>
    </section>
  );
};

export default ProjectsContainer;
