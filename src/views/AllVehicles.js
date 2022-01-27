import React from "react";
import Header from "../components/Header";
import Pagetitle from "../components/Pagetitle";
import Table from "../components/Table";
import { UserContext } from "../UserContext";
import styles from "./styles/AllVehicles.module.css";

const AllVehicles = () => {
  const { token, logout } = React.useContext(UserContext);
  const [vehiclesData, setVehiclesData] = React.useState({});
  const [actualPage, setActualPage] = React.useState(1);
  const [search, setSearch] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const addr = new URL("https://autoluby.dev.luby.com.br/vehicles");
      addr.searchParams.set("page", actualPage);
      if (!!search) addr.searchParams.set("model", search);
      const response = await fetch(addr.href, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.status === 403) logout();
      const jsonBody = await response.json();
      setVehiclesData(jsonBody);
    }
    getData();
  }, [actualPage, logout, setVehiclesData, token, search]);

  return (
    <>
      <Header showSearchbar={false} />
      <main className={styles.main}>
        <Pagetitle>Todos Veículos</Pagetitle>
        <section>
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
            currentPage={vehiclesData.currentPage}
            perPage={vehiclesData.perPage}
            totalRecords={vehiclesData.totalRecords}
            changePage={setActualPage}
            searchBar={setSearch}
          />
        </section>
      </main>
    </>
  );
};

export default AllVehicles;
