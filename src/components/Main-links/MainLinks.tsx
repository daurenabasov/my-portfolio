import Arrow from "../../assets/images/arrow";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./MainLinks.module.scss";

const MainLinks = () => {
  const navigate = useNavigate();

  const getAbout = () => {
    navigate("/about");
  };

  const leftLink = "Contacts";
  const centerLink = "Projects";
  const rightLink = "About";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggeChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id={s.MainLinks}>
      <div id={s.container}>
        <motion.a
          href="#"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {leftLink.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <Arrow />
        </motion.a>
        <motion.a
          href="#"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {centerLink.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <Arrow />
        </motion.a>
        <motion.span
          variants={sentence}
          initial="hidden"
          animate="visible"
          onClick={getAbout}
        >
          {rightLink.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <Arrow />
        </motion.span>
      </div>
      <div className={s.social}>
        <div className={s.logo}>
          <img src="" alt="" />
        </div>
        <a
          href="https://www.linkedin.com/in/dauren-abasov-91b3a5243/"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </section>
  );
};

export default MainLinks;
