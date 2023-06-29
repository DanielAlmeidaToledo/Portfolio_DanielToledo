import "./carousel.sass";

import smartmoney from "../../assets/projects/project08.png";
import vivace from "../../assets/projects/project01.png";
import imobiliaria from "../../assets/projects/project02.png";
import habitos from "../../assets/projects/project03.png";
import formulario from "../../assets/projects/project04.png";
import ecommerce from "../../assets/projects/project05.png";
import nlwsports from "../../assets/projects/project06.png";
import devweather from "../../assets/projects/project07.png";

export const baseUrl = "../assets/projects";

const projects = [
  {
    title: "Smart.money",
    image: smartmoney,
    github: "Smart.money",
  },
  {
    title: "Vivace Store",
    image: vivace,
    github: "Vivace",
  },
  {
    title: "Formulário Multi-Etapas",
    image: formulario,
    github: "MultiForms",
  },
  {
    title: "Habits",
    image: habitos,
    github: "NLW_Setup",
  },
  {
    title: "Encontre seu Duo",
    image: nlwsports,
    github: "NLW_eSports",
  },
  {
    title: "Toledo Sports",
    image: ecommerce,
    github: "eCommerce_React",
  },
  {
    title: "Imobiliária BZ",
    image: imobiliaria,
    github: "BZ_Imobiliaria",
  },
  {
    title: "Dev Weather",
    image: devweather,
    github: "DevWeather",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      {projects.map((project) => {
        const { title, image, github } = project;
        return (
          <div
            className="carousel-item"
            key={title}
            style={{
              background: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="info-item">
              <h3>{title}</h3>
              <a
                href={`https://github.com/DanielAlmeidaToledo/${github}`}
                className="btn btnProject"
                target={"_blank"}
              >
                Acessar
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
