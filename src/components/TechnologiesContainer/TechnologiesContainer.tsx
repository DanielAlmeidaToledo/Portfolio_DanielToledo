import { DiJsBadge, DiSass } from "react-icons/di";

import {
  SiTailwindcss,
  SiTypescript,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJquery,
  SiBootstrap,
} from "react-icons/si";

import "./technologiescontainer.sass";

const technologies = [
  {
    id: "react",
    name: "React.JS",
    icon: <SiReact color="#61dafb" />,
    text: "Components, Hooks, Reduce, Context, Router, Listas, API's.",
  },
  {
    id: "angular",
    name: "Angular",
    icon: <SiAngular color="#C4002B" />,
    text: "Components, Renderização, Interface, Diretivas, Listas.",
  },
  {
    id: "next",
    name: "Next.JS",
    icon: <SiNextdotjs color="#FFFFFF" />,
    text: "Components, Nested Routes, API's.",
  },
  {
    id: "typescript",
    name: "Typescript",
    icon: <SiTypescript color="#3178C6" />,
    text: "Interface, Type, Props.",
  },
  {
    id: "node",
    name: "Node.JS",
    icon: <SiNodedotjs color="#44883e" />,
    text: "Rotas, Express, API's.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge color="#f0db4f" />,
    text: "DOM, Functions, Objects, API's, Local Storage, JSON.",
  },
  {
    id: "jquery",
    name: "jQuery",
    icon: <SiJquery color="#0769ad" />,
    text: "Eventos, Ajax, JSON, Local Storage.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: <SiTailwindcss color="#38BDF8" />,
    text: "Animações, Responsividade, Media Queries.",
  },
  {
    id: "sass",
    name: "Sass",
    icon: <DiSass color="#CD6799" />,
    text: "Variables, Mixins, Includes.",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <SiBootstrap color="#6E2CF1" />,
    text: "Grids, Cards, Alerts, Tables",
  },
];
const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
