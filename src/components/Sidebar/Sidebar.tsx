import InformationContainer from "../InformationContainer/InformationContainer";
import SocialNetWorks from "../SocialNetworks/SocialNetworks";
import Experience from "../Experience/Experience";

import Avatar from "../../assets/DanielToledo.jpg";

import "./sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Imagem Daniel Toledo"></img>
      <p className="title">Frontend Developer</p>
      <SocialNetWorks />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1sJ-Mkay8ptrjrX2WI7uNumUWj0-tUYVK/view?usp=sharing"
        target="_blank"
        className="btn"
      >
        Download Currículo
      </a>
      <Experience />
    </aside>
  );
};

export default Sidebar;
