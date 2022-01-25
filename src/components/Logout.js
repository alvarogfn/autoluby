import React from "react";
import styles from "./styles/Logout.module.css";
import { UserContext } from "../UserContext";

const Logout = () => {
  const { logout } = React.useContext(UserContext);
  return (
    <button className={styles.button} onClick={logout}>
      Sair
    </button>
  );
};

export default Logout;
