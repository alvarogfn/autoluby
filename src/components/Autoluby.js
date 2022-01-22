import React from "react";
import autolubyIcon from "../assets/autoluby.svg";
import styles from "./styles/Autoluby.module.css";

const Autoluby = () => {
  return (
    <div className={styles.icon}>
      <img src={autolubyIcon} alt="autoLuby" />
      <h1 className={styles.h1}>AutoLuby</h1>
    </div>
  );
};

export default Autoluby;
