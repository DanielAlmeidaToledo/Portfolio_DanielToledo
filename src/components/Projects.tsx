import NumberAnimation from "./NumberAnimation";

const Informations = [
  { title: "Freelancer", value: 3 },
  { title: "Projetos no Github", value: 27 },
  { title: "Anos de experiência", value: 1 },
  { title: "Cursos e Certificados", value: 5 },
];

const Projects = () => {
  return (
    <div>
      <h2>Projetos</h2>
      {Informations.map((info) => {
        return (
          <div key={info.title}>
            <h3>{info.title}</h3>
            <NumberAnimation value={info.value} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
