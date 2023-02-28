import { DiJsBadge, DiSass } from "react-icons/di";

import {
  SiTailwindcss,
  SiTypescript,
  SiAngular,
  SiReact,
} from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "react",
    name: "React.JS",
    icon: <SiReact />,
    text: "Components, Hooks, Reduce, Context, Router, Listas, API's.",
  },
  {
    id: "angular",
    name: "Angular",
    icon: <SiAngular color="#C4002B" />,
    text: "Components, Renderização, Interface, Diretivas, Listas.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    text: "DOM, Functions, Objects, API's.",
  },
  {
    id: "typescript",
    name: "Typescript",
    icon: <SiTypescript color="#3178C6" />,
    text: "Interface, Type, Props.",
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
    icon: <DiSass />,
    text: "Variables, Mixins, Includes.",
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
