import { motion } from "framer-motion";
import ParallaxText from "../Parallax-text/ParallaxText";
import { IProjects } from "../../types/models";
import s from "./Projects.module.scss";
// import { useState } from "react";
// import royal from "../../assets/images/royal.png";

const Projects = () => {
  // const [hoveredIndex, setHoveredIndex] = useState(-1);

  // const handleMouseEnter = (index: number) => {
  //   setHoveredIndex(index);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredIndex(-1);
  // };

  const getLink = (url: string) => {
    window.open(url, "_blank");
  };

  const projects: IProjects[] = [
    {
      name: "Royal",
      year: 2023,
      link: "https://royal-gamma.vercel.app/",
    },
    {
      name: "Uno.kg",
      year: "2022-2023",
      link: "https://uno.kg/",
    },
    {
      name: "Cahtad",
      year: 2022,
      link: "https://cahtad-c6bde.web.app/",
    },
    {
      name: "Menu Soulist",
      year: 2023,
      link: "https://menu.soulist.kg/",
    },
    {
      name: "Investor",
      year: 2023,
      link: "https://hackaton-codify.vercel.app/",
    },
    {
      name: "Med-app",
      year: 2022,
      link: "https://med-app-da.vercel.app/",
    },
  ];
  return (
    <section className={s.Projects} id="projects">
      <ParallaxText baseVelocity={5}> My Projects</ParallaxText>
      <ParallaxText baseVelocity={-5}> My Projects</ParallaxText>
      <div id={s.container}>
        {projects.map(({ name, year, link }, id) => (
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 1,
              },
            }}
            whileTap={{ scale: 0.9 }}
            key={id}
            className={s.project}
            onClick={() => getLink(link)}
          >
            {name}
            <span>{year} </span>
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default Projects;
