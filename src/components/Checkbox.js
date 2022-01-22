import React from "react";
import styles from "./styles/Checkbox.module.css";

const Checkbox = ({ onChange, value, label, id }) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        name={id}
        checked={value}
        onChange={onChange}
      />
      <span className={styles.text}>{label}</span>
    </label>
  );
};

export default Checkbox;
