import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Homecard.module.css";

const Homecard = ({ to, text, image, number }) => {
  return (
    <Link to={to} className={styles.name}>
      item
    </Link>
  );
};

export default Homecard;
