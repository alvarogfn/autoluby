import React from "react";
import styles from "./styles/Searchbar.module.css";
const Searchbar = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      {value & onChange ? (
        <input className={styles.input} value={value} onChange={onChange} />
      ) : (
        <input className={styles.input} />
      )}
    </div>
  );
};

export default Searchbar;
