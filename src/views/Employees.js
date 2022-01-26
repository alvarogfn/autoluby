import React from "react";
import Header from "../components/Header";
import { UserContext } from "../UserContext";
import Table from "../components/Table";
import styles from "./styles/Employees.module.css";
import Pagetitle from "../components/Pagetitle";

const Employees = () => {
  const { token, logout } = React.useContext(UserContext);
  const [employeesData, setEmployeesData] = React.useState(null);

  const getEmployeesData = React.useCallback(async () => {
    const response = await fetch(
      "https://autoluby.dev.luby.com.br/employees?noPaginate=false",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (response.status === 403) logout();
    const responseBody = await response.json();
    setEmployeesData(responseBody);
  }, [token, logout, setEmployeesData]);

  React.useEffect(() => {
    getEmployeesData();
  }, [getEmployeesData]);

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
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Employees;
