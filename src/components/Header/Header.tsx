import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { INavigate } from "../../types/models";
import s from "./Header.module.scss";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const [nav] = useState<INavigate[]>([
    {
      name: "Home",
      path: "",
    },
    {
      name: "Skills",
      path: "skills",
    },
    {
      name: "Experience",
      path: "experience",
    },
  ]);

  const getHome = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header id={s.header}>
      <div id={s.container}>
        <div className={s.logo} onClick={getHome}>
          Dauren Abasov
        </div>
        <nav>
          <ul className={s.navigation}>
            {showMenu ? (
              <span onClick={toggleMenu}>Menu+</span>
            ) : (
              <>
                {nav.map(({ name, path }, id) => (
                  <li key={id}>
                    <a href={`#${path}`}>{name}</a>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
        {showSidebar ? (
          <div className={s.burger}>
            <div onClick={toggleSidebar}>Menu+</div>
          </div>
        ) : (
          <>
            {!showSidebar && (
              <Sidebar
                active={!showSidebar}
                closeSidebar={() => setShowSidebar(true)}
              />
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
