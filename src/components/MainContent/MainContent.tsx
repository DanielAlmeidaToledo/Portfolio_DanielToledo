import AboutContainer from "../AboutContainer/AboutContainer";
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import TechnologiesContainer from "../TechnologiesContainer/TechnologiesContainer";

import "./maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <ProjectsContainer />
      <TechnologiesContainer />
    </main>
  );
};

export default MainContent;
