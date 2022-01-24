import React from "react";
import { Link } from "react-router-dom";
import autolubyIcon from "../assets/autoluby.svg";
import styles from "./styles/Autoluby.module.css";

const Autoluby = () => {
  return (
    <Link to="/" className={styles.icon}>
      <img src={autolubyIcon} alt="autoLuby" />
      <h1 className={styles.h1}>AutoLuby</h1>
    </Link>
  );
};

export default Autoluby;
