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
  },
  {
    title: "Imobiliária BZ",
    image: project02,
  },
  {
    title: "Habits",
    image: project03,
  },
  {
    title: "Formulário Multi-Etapas",
    image: project04,
  },
  {
    title: "Toledo Sports",
    image: project05,
  },
  {
    title: "Encontre seu Duo",
    image: project06,
  },
  {
    title: "Dev Weather",
    image: project07,
  },
  {
    title: "Dashboard Angular",
    image: project08,
  },
];

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <section className="carousel-container">
      {/* <Slider {...settings}>
        {projects.map((project) => {
          return (
            <div className="carousel-item" key={project.title}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          );
        })}
      </Slider> */}
    </section>
  );
};

export default Carousel;
