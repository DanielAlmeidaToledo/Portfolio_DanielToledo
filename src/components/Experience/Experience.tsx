import * as Tabs from "@radix-ui/react-tabs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

import "./experience.sass";

const Experiences = [
  {
    role: "Desenvolvedor Front-end Júnior",
    company: "TPrime | Goevo",
    date: "2023 - Até o momento",
  },
  {
    role: "Estagiário de Desenvolvimento",
    company: "BNE - Banco Nacional de Empregos",
    date: "2022 - 2023",
  },
  {
    role: "Assistente de Vendas",
    company: "Megaplasma Comercial",
    date: "2020 - 2022",
  },
  {
    role: "Monitor de Matemática",
    company: "IFSP - Campus Boituva",
    date: "2019",
  },
];

const Courses = [
  {
    role: "Análise e Desenvolvimento de Sistemas",
    company: "IFSP - Campus Boituva",
    date: "2022 - 2024",
  },
  {
    role: "Técnico em Redes de Computadores",
    company: "IFSP - Campus Boituva",
    date: "2017 - 2019",
  },
  {
    role: "NLW - Setup",
    company: "Rocketseat",
    date: "2023",
  },
  {
    role: "NLW - eSports",
    company: "Rocketseat",
    date: "2022",
  },
  {
    role: "React.JS Completo",
    company: "Udemy",
    date: "2022",
  },
  {
    role: "Projetos ágeis com Scrum",
    company: "DIO",
    date: "2022",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experiências</h2>

      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Profissionais
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Acadêmicas
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <div className="experiences-list">
            {Experiences.map((experience) => {
              const { role, company, date } = experience;
              return (
                <div className="experience-item" key={company}>
                  <div className="circle"></div>
                  <h3>{role}</h3>
                  <span>
                    <HiOutlineCode className="icon-experiences" size={20} />
                    {company}
                  </span>
                  <p>
                    <AiOutlineCalendar className="icon-experiences" size={20} />
                    {date}
                  </p>
                </div>
              );
            })}
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <div className="experiences-list">
            {Courses.map((experience) => {
              const { role, company, date } = experience;
              return (
                <div className="experience-item" key={company}>
                  <div className="circle"></div>
                  <h3>{role}</h3>
                  <span>
                    <MdOutlineSchool className="icon-experiences" size={20} />
                    {company}
                  </span>
                  <p>
                    <AiOutlineCalendar className="icon-experiences" size={20} />
                    {date}
                  </p>
                </div>
              );
            })}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Experience;
