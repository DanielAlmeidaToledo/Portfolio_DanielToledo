import "../styles/components/experience.sass";

const Experiences = [
  {
    role: "Desenvolvendor Front-end Júnior",
    company: "TPrime Tecnologia",
    date: "2023 - Até o momento",
  },
  {
    role: "Estagiário de Desenvolvimento",
    company: "BNE",
    date: "2022 - 2023",
  },
  {
    role: "Assistente de Vendas",
    company: "Megaplasma",
    date: "2020 - 2022",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experiências</h2>

      <div className="experiences-list">
        {Experiences.map((experience) => {
          const { role, company, date } = experience;
          return (
            <div className="experience-item" key={company}>
              <div className="circle"></div>
              <h3>{role}</h3>
              <h4>{company}</h4>
              <p>{date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
