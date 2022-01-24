import React from "react";
import Autoluby from "./Autoluby";
import Logout from "./Logout";
import Searchbar from "./Searchbar";
import styles from "./styles/Header.module.css";

const Header = ({ showSearchbar }) => {
  const searchBarAppear = showSearchbar
    ? styles.showSearchbar
    : styles.hiddenSearchBar;

  return (
    <header className={`${styles.header} ${searchBarAppear}`}>
      <div className={styles.icon}>
        <Autoluby />
      </div>
      {showSearchbar && (
        <div className={styles.searchbar}>
          <Searchbar />
        </div>
      )}
      <div className={styles.logout}>
        <Logout />
      </div>
    </header>
  );
};

export default Header;
