import React from "react";
import styles from "./styles/Searchbar.module.css";
const Searchbar = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} />
    </div>
  );
};

export default Searchbar;
