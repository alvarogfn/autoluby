import React from "react";
import styles from "./styles/Pagetitle.module.css";

const Pagetitle = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Pagetitle;
