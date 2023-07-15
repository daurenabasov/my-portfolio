import { FC, useCallback, useState } from "react";
import { INavigate } from "../../types/models";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./Sidebar.module.scss";

interface SidebarProps {
  closeSidebar: () => void;
  active: boolean;
}

const Sidebar: FC<SidebarProps> = ({ closeSidebar, active }) => {
  const [nav] = useState<INavigate[]>([
    {
      name: "Home",
      path: "/",
      getClose: useCallback(() => {
        closeSidebar();
      }, [closeSidebar]),
    },
    {
      name: "Skills",
      path: "/skills",
      getClose: useCallback(() => {
        closeSidebar();
      }, [closeSidebar]),
    },
    {
      name: "Experience",
      path: "/experience",
      getClose: useCallback(() => {
        closeSidebar();
      }, [closeSidebar]),
    },
    {
      name: "Contacts",
      path: "/contacts",
      getClose: useCallback(() => {
        closeSidebar();
      }, [closeSidebar]),
    },
  ]);
  const getClose = useCallback(() => {
    closeSidebar();
  }, [closeSidebar]);

  return (
    <motion.aside
      initial={{ opacity: -10, top: "-100vh" }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.2 }}
      id={s.Sidebar}
      className={`${active ? s.active : ""}`}
      style={{ top: active ? "0" : "-100vh", opacity: active ? "1" : "0" }}
    >
      <nav>
        <ul className={s.sidebarNav}>
          {nav.map(({ name, path }, id) => (
            <motion.li
              key={id}
              initial={{ opacity: -10, top: "-50px" }}
              whileInView={{ opacity: 1, top: 0 }}
              transition={{ duration: 1 }}
            >
              <Link to={path} onClick={getClose}>
                {name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <span className={s.close} onClick={getClose}>
        Close+
      </span>
    </motion.aside>
  );
};

export default Sidebar;
