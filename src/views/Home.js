import React from "react";
import Header from "../components/Header";
import Homecard from "../components/Homecard";
import { UserContext } from "../UserContext";
import styles from "./styles/Home.module.css";

import oneVehicle from "../assets/one-vehicle.png";
import employer from "../assets/employer.png";
import vehicles from "../assets/vehicles.png";
import Pagetitle from "../components/Pagetitle";

const Home = () => {
  const { pageData } = React.useContext(UserContext);
  return (
    <>
      <Header showSearchbar={true} />
      <main className={styles.main}>
        <Pagetitle className={styles.welcome}>
          Bem-vindo, {pageData.name}
        </Pagetitle>
        <p className={styles.menu}>Menu</p>
        <div className={styles.options}>
          <Homecard
            to="/seus-veiculos"
            tot={pageData.totalVehiclesLoggedUser + " veículos"}
            title={"Veículos reservados e vendidos"}
            subtitle={"Veículos reservados e vendidos por você"}
          >
            <img className={styles.img} src={oneVehicle} alt="Seus veículos" />
          </Homecard>
          <Homecard
            to="/todos-veiculos"
            tot={pageData.totalVehicles + " veículos"}
            title={"Listagem geral de veículos"}
            subtitle={"Listagem de veículos de toda a empresa"}
          >
            <img
              className={styles.img}
              src={vehicles}
              alt="Todos os veiculos"
            />
          </Homecard>
          <Homecard
            to="/funcionarios"
            tot={pageData.totalEmployees + " funcionários"}
            title={"Funcionários da empresa"}
            subtitle={"Listagem de todos os funcionários da empresa"}
          >
            <img
              className={styles.img}
              src={employer}
              alt="Seus funcionários"
            />
          </Homecard>
        </div>
      </main>
    </>
  );
};

export default Home;
