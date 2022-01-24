import React from "react";
import Header from "../components/Header";
import Homecard from "../components/Homecard";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Header showSearchbar={true} />
      <main className={styles.main}>
        <h1 className={styles.welcome}>Bem-vindo, @user</h1>
        <p className={styles.menu}>Menu</p>
        <div className={styles.options}>
          <Homecard to="/funcionarios" />
          <Homecard to="/todos-veiculos" />
          <Homecard to="/seus-veiculos" />
        </div>
      </main>
    </>
  );
};

export default Home;
