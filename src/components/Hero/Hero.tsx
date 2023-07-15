import  { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, Variants } from "framer-motion";
import { IMousePosition } from "../../types/models";
import s from "./Hero.module.scss";

const Hero = () => {
  const names = [
    "Designer",
    2000,
    "React Developer",
    2000,
    "NextJs Developer",
    2000,
    "TypeScript Developer",
    2000,
  ];

  const [mousePosition, setMousePosition] = useState<IMousePosition>({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState<string>("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#fff",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <section id={s.hero}>
      <div id={s.container}>
        <motion.h1
          initial={{ y: 30, opacity: -2 }}
          whileInView={{ y: 0, opacity: 3 }}
          transition={{ duration: 2 }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          I'am Dauren <br />
          <motion.span
            initial={{ y: 20, opacity: -2 }}
            whileInView={{ y: 0, opacity: 3 }}
            transition={{ duration: 2 }}
          >
            I'am <TypeAnimation sequence={names} />
          </motion.span>
        </motion.h1>
        <motion.div
          className={s.cursor}
          animate={cursorVariant}
          variants={variants}
        />
        <motion.span
          initial={{ y: 30, opacity: -2 }}
          whileInView={{ y: 0, opacity: 3 }}
          transition={{ duration: 2 }}
          className={s.city}
        >
          BASED IN BISHKEK
        </motion.span>
      </div>
    </section>
  );
};

export default Hero;
