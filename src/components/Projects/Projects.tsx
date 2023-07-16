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

  const projects: IProjects[] = [
    {
      name: "Royal",
      year: 2023,
    },
    {
      name: "Uno.kg",
      year: "2022-2023",
    },
    {
      name: "Cahtad",
      year: 2022,
    },
    {
      name: "Menu Soulist",
      year: 2023,
    },
  ];
  return (
    <section className={s.Projects} id="projects">
      <ParallaxText baseVelocity={5}> My Projects</ParallaxText>
      <ParallaxText baseVelocity={-5}> My Projects</ParallaxText>
      <div id={s.container}>
        {projects.map(({ name, year }, id) => (
          <motion.p
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 1,
              },
            }}
            whileTap={{ scale: 0.9 }}
            key={id}
            className={s.project}
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
