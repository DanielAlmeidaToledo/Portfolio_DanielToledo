import Carousel from "./Carousel";

import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>

      <Carousel />
    </section>
  );
};

export default ProjectsContainer;
