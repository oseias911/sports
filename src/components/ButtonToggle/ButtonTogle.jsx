import React, { useState } from "react";
import styles from "./ButtonTogle.module.css";

const ButtonTogle = ({ onClick, Fistogle }) => {
  return (
    <button className={styles.container_button_toggle} onClick={onClick}>
      {Fistogle ? (
        <div className="w-full h-full flex justify-center items-center bg-background">
          <i className="fas fa-times text-2xl text-color"></i>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <i className="fas fa-bars text-2xl"></i>
        </div>
      )}
    </button>
  );
};

export default ButtonTogle;
