import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import ButtonTogle from "../ButtonToggle/ButtonTogle";
//animate__backInLeft
const Sidebar = (props) => {
  const [isTogle, setIsTogle] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const HamdleButton = () => {
    setIsTogle(!isTogle);
    setSidebar(!sidebar);
  };
  return (
    <>
      <ButtonTogle onClick={HamdleButton} Fistogle={isTogle} />
      <nav
        className={
          sidebar
            ? `${styles.container_sidebar} ${styles.active}`
            : `${styles.container_sidebar}`
        }
      >
        <div>
          <h1 className="animate__animated animate__bounce">
            An animated element
          </h1>
          <button>Botao</button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
