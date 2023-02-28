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
      <a
        href="https://github.com/DanielAlmeidaToledo?tab=repositories"
        className="btn"
        target="_blank"
      >
        Ver Projetos
      </a>
    </section>
  );
};

export default ProjectsContainer;
