import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import s from "./Experience.module.scss";

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  const isInViewResult = useInView(ref, { once: true });

  useEffect(() => {
    setIsInView(isInViewResult);
  }, [isInViewResult]);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = ref.current?.getBoundingClientRect() || {
        top: 0,
        bottom: 0,
      };
      setIsInView(top < window.innerHeight && bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.backgroundColor = "black";
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    body.style.opacity = isInView ? "11" : "10";
    body.style.backgroundColor = isInView ? "white" : "black";
    body.style.color = "#a3a3a3";
    body.style.transition = "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s";
  }, [isInView]);

  const [scrollY, setScrollY] = useState(-100);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  interface ICompanies {
    title: string;
    description: string;
    date: string;
  }
  

  const companies: ICompanies[] = [
    {
      title: "Ailine company",
      description:
        "Ailine company - outsourcing company developing custom projects. Outsourcing company developing projects to order.",
      date: "06.2022-09.2022",
    },
    {
      title: "Light code",
      description:
        "Programming courses. Develop a CRM system for Bai-Tushum Bank in 4 months with our development team ",

      date: "09.2022-12.2022",
    },
    {
      title: "Codify academy",
      description:
        "Codify academy courses. He was the support of the senior mentor in the direction of Frontend. My duties included mentoring students, reviewing the code of their assignments, checking exams, helping with their projects. In addition to the position of those supporters, he was a mentor of teenagers at a bootcamp in the direction of Javascript. ",

      date: "11.2022-07.2023",
    },
    {
      title: "Uno.kg",
      description:
        "Startup Uno.kg. Developed a marketplace with NextJS stack, Typescript, Redux Toolkit,gitflow,also worked with atomic design architecture",

      date: "12.2022-03.2023",
    },
    {
      title: "Ask.inc",
      description:
        "Startup Ask.inc. Developed a marketplace, crm system,landing site, mobile application. Work according to the Scrum methodology, used the flow git. As part of the development, we used the FSD architecture, NextJS, Typescript, Redux Toolkit",

      date: "04.2022-now",
    },
  ];

  return (
    <section id="experience" className={s.Experience} ref={ref}>
      <div id={s.container}>
        <motion.h1 style={{ scale: `${scrollY / 2800}` }}>
          My Experience
        </motion.h1>
        <div className={s.companies_container}>
          {companies.map(({ title, description, date }, id) => (
            <div key={id} className={s.companies}>
              <h2>{title}</h2>
              <p>{description}</p>
              <time>{date}</time>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  1;
};

export default Experience;
