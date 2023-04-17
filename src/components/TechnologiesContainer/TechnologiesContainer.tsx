import { DiJsBadge, DiSass } from "react-icons/di";

import {
  SiTailwindcss,
  SiTypescript,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJest,
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
    id: "typescript",
    name: "Typescript",
    icon: <SiTypescript color="#3178C6" />,
    text: "Interface, Type, Props.",
  },
  {
    id: "next",
    name: "Next.JS",
    icon: <SiNextdotjs color="#FFFFFF" />,
    text: "Components, Nested Routes, API's.",
  },
  {
    id: "angular",
    name: "Angular",
    icon: <SiAngular color="#C4002B" />,
    text: "Components, Renderização, Interface, Diretivas, Listas.",
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
  {
    id: "jest",
    name: "Jest.JS",
    icon: <SiJest color="#C63D14" />,
    text: "Testes unitários.",
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
