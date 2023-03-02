import SocialNetWorks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import Experience from "./Experience";

import Avatar from "../assets/DanielToledo.jpg";
import CV from "../assets/CVDanielToledo.pdf";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Imagem Daniel Toledo"></img>
      <p className="title">Desenvolvedor Front-end</p>
      <SocialNetWorks />
      <InformationContainer />
      <a href={CV} download={CV} className="btn">
        Download Currículo
      </a>
      <Experience />
    </aside>
  );
};

export default Sidebar;
