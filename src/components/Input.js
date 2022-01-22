import React from "react";
import styles from "./styles/Input.module.css";

const Input = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
}) => {
  return (
    <div
      className={`${styles.container} ${
        error ? styles.isInvalid : styles.isValid
      }`}
    >
      <label htmlFor={name} className={styles.label}>
        <span className={styles.labelText}>{label}</span>
        <input
          className={styles.input}
          id={name}
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
          onChange={({ target }) => onChange(target.value)}
          title={error}
        />
      </label>
    </div>
  );
};

export default Input;
