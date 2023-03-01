import React, { Component } from "react";
import Slider from "react-slick";

import "../styles/components/carousel.sass";

import project01 from "../assets/projects/project01.png";
import project02 from "../assets/projects/project02.png";
import project03 from "../assets/projects/project03.png";
import project04 from "../assets/projects/project04.png";
import project05 from "../assets/projects/project05.png";
import project06 from "../assets/projects/project06.png";
import project07 from "../assets/projects/project07.png";
import project08 from "../assets/projects/project08.png";

export const baseUrl = "../assets/projects";

const projects = [
  {
    title: "Vivace Store",
    image: project01,
    github: "https://github.com/DanielAlmeidaToledo/Vivace",
  },
  {
    title: "Imobiliária BZ",
    image: project02,
    github: "https://github.com/DanielAlmeidaToledo/BZ_Imobiliaria",
  },
  {
    title: "Habits",
    image: project03,
    github: "https://github.com/DanielAlmeidaToledo/NLW_Setup",
  },
  {
    title: "Formulário Multi-Etapas",
    image: project04,
    github: "https://github.com/DanielAlmeidaToledo/MultiForms",
  },
  {
    title: "Toledo Sports",
    image: project05,
    github: "https://github.com/DanielAlmeidaToledo/eCommerce_React",
  },
  {
    title: "Encontre seu Duo",
    image: project06,
    github: "https://github.com/DanielAlmeidaToledo/NLW_eSports",
  },
  {
    title: "Dev Weather",
    image: project07,
    github: "https://github.com/DanielAlmeidaToledo/DevWeather",
  },
  {
    title: "Dashboard Angular",
    image: project08,
    github: "https://github.com/DanielAlmeidaToledo/DashboardAngular",
  },
];

const Carousel = () => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={`${baseUrl}/project0${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      {/* <Slider {...settings}> */}
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
              <a href={github} className="btn btnProject" target={"_blank"}>
                Acessar
              </a>
            </div>
          </div>
        );
      })}
      {/* </Slider> */}
    </div>
  );
};

export default Carousel;
