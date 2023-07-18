import { motion } from "framer-motion";
import s from "./Skills.module.scss";

const Skills = () => {
  return (
    <motion.section initial={{}} id="skills" className={s.Skills}>
      <div id={s.container}>Skills</div>
    </motion.section>
  );
};

export default Skills;
