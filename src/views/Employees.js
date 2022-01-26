import React from "react";
import Header from "../components/Header";
import { UserContext } from "../UserContext";
import Table from "../components/Table";
import styles from "./styles/Employees.module.css";
import Pagetitle from "../components/Pagetitle";

const Employees = () => {
  const { token, logout } = React.useContext(UserContext);
  const [employeesData, setEmployeesData] = React.useState(null);
  const [actualPage, setActualPage] = React.useState(1);


  React.useEffect(() => {
    async function getData() {
      const addr = new URL("https://autoluby.dev.luby.com.br/employees");
      addr.searchParams.set("page", actualPage);
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
      setEmployeesData(jsonBody);
    }
    getData();
  }, [actualPage, logout, setEmployeesData, token]);

  return (
    <>
      <Header showSearchbar={false} />
      <main className={styles.main}>
        <Pagetitle>Funcionários</Pagetitle>
        <section>
          {employeesData && (
            <Table
              title="Listagem de funcionários da empresa"
              rows={["nome", "email", "cpf", "valor", "bio"]}
              data={employeesData.employees}
              currentPage={employeesData.currentPage}
              perPage={employeesData.perPage}
              totalRecords={employeesData.totalRecords}
              changePage={setActualPage}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Employees;
