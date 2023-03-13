import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "./socialnetworks.sass";

const socialNetworks = [
  {
    name: "whatsapp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/5515998485252",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/danieltoledo_02/",
  },
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/danielalmeidadetoledo/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/DanielAlmeidaToledo",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
