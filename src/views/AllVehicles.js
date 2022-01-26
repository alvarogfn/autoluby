import React from "react";
import Header from "../components/Header";
import Pagetitle from "../components/Pagetitle";
import Table from "../components/Table";
import { UserContext } from "../UserContext";
import styles from "./styles/AllVehicles.module.css";

const AllVehicles = () => {
  const { token, logout } = React.useContext(UserContext);
  const [vehiclesData, setVehiclesData] = React.useState({});

  const getVehiclesData = React.useCallback(async () => {
    const response = await fetch("https://autoluby.dev.luby.com.br/vehicles", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.status === 403) logout();
    const responseBody = await response.json();
    setVehiclesData(responseBody);
  }, [token, logout, setVehiclesData]);

  React.useEffect(() => {
    getVehiclesData();
  }, [getVehiclesData]);

  return (
    <>
      <Header showSearchbar={false} />
      <main className={styles.main}>
        <Pagetitle>Todos Veículos</Pagetitle>
        <section>
          {vehiclesData && (
            <Table
              title="Listagem de veículos reservados e vendidos"
              centralize={false}
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
              data={vehiclesData.vehicles}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default AllVehicles;
