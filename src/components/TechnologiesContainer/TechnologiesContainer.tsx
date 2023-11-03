import { DiJsBadge, DiSass } from "react-icons/di";

import {
  SiTailwindcss,
  SiTypescript,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJest,
  SiPython,
  SiAmazonaws,
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
    id: "python",
    name: "Python",
    icon: <SiPython color="#FFD43B" />,
    text: "Flask, Pandas.",
  },
  {
    id: "node",
    name: "Node.JS",
    icon: <SiNodedotjs color="#44883e" />,
    text: "Rotas, Express, NestJS, API's.",
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
    id: "aws",
    name: "AWS Services",
    icon: <SiAmazonaws color="#FF9900" />,
    text: "S3 Bucket, Lambda, SNS, DynamoDB.",
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
