import {
  DiReact,
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiSass,
  DiAngularSimple,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "react", name: "React.JS", icon: <DiReact />, text: "Components, Hooks, Router, Listas, API's." },
  { id: "angular", name: "Angular", icon: <DiAngularSimple />, text: "Components, Renderização, Interface, Diretivas, Listas."  },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "DOM, Functions, Objects, API's."  },
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "HTML Semântico, Formulários, Validações."  },
  { id: "sass", name: "Sass", icon: <DiSass />, text: "Variables, Mixins, Includes."  },
  { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Animações, Responsividade, Media Queries."  },
];

const TechnologiesContainer = () => {
  return <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>
              {tech.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
}

export default TechnologiesContainer