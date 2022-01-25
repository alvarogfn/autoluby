import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Homecard.module.css";

const Homecard = ({ to, title, tot, children, subtitle }) => {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.titles}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <p className={styles.tot}>{tot}</p>
      <div className={styles.img}>{children}</div>
    </Link>
  );
};

export default Homecard;
