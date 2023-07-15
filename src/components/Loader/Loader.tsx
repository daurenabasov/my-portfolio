import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import s from "./Loader.module.scss";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      controls.start({ y: "-100%", transition: { duration: 1 } });
    }
  }, [controls, loading]);

  return loading ? (
    <motion.div
      className={s.loader}
      initial={{ y: "0%" }}
      transition={{ duration: 2, delay: 1000 }}
      animate={controls}
    >
      <div className={s.box}>
        <ul>
          <li className={s.item_1}>One</li>
          <li className={s.item_2}>Two</li>
          <li className={s.item_3}>Three</li>
          <li className={s.item_4}>Four</li>
          <li className={s.item_5}>Five</li>
          <li className={s.item_6}>One</li>
        </ul>
      </div>
    </motion.div>
  ) : null;
};

export default Loader;
