import React from "react";
import styles from "./styles/Searchbar.module.css";
const Searchbar = ({ setSearch }) => {
  // const [value, setValue] = React.useState("");

  return (
    <div>
      {/* <input
        className={styles.input}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onBlur={() => setSearch(value)}
      /> */}
      <input className={styles.input} />
    </div>
  );
};

export default Searchbar;
