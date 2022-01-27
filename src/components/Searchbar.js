import React from "react";
import styles from "./styles/Searchbar.module.css";
const Searchbar = ({ setSearch }) => {
  const [value, setValue] = React.useState("");

  function search(e) {
    e.preventDefault();
    if (setSearch) setSearch(value);
  }

  return (
    <form onSubmit={(e) => search(e)}>
      <input
        className={styles.input}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </form>
  );
};

export default Searchbar;
