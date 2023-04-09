import InformationContainer from "../InformationContainer/InformationContainer";
import SocialNetWorks from "../SocialNetworks/SocialNetworks";
import Experience from "../Experience/Experience";

import Avatar from "../../assets/DanielToledo.jpg";
import CV from "../../assets/CVDanielToledo.pdf";

import "./sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Imagem Daniel Toledo"></img>
      <p className="title">Frontend Developer</p>
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
