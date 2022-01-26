import React from "react";
import Header from "../components/Header";
import Pagetitle from "../components/Pagetitle";
import Table from "../components/Table";
import { UserContext } from "../UserContext";
import styles from "./styles/Yourvehicles.module.css";

const YourVehicles = () => {
  const { userData } = React.useContext(UserContext);
  const [actualPage, setActualPage] = React.useState(1);

  return (
    <>
      <Header showSearchbar={false} />
      <main className={styles.main}>
        <Pagetitle>Seus Veículos</Pagetitle>
        <section className={styles.card}>
          {
            <Table
              title={"Listagem de veículos reservados e vendidos"}
              rows={[
                "marca",
                "modelo",
                "ano",
                "km",
                "cor",
                "status",
                "chassi",
                "valor",
              ]}
              data={userData.vehicles}
              centralize={true}
              changePage={setActualPage}
              currentPage={actualPage}
            />
          }
        </section>
      </main>
    </>
  );
};

export default YourVehicles;
