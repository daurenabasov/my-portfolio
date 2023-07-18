import React, { FC, memo } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

interface SmoothScrollProps {
  children?: React.ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, -100]); // Измените значения [-100, 0] на те, которые соответствуют вашим требованиям

  const spring = useSpring(transform, {
    stiffness: 300,
    damping: 30,
  });

  return <motion.div style={{ y: spring }}>{children}</motion.div>;
};

export default SmoothScroll;
