import React from "react";
import styles from "./styles/Table.module.css";
import Searchbar from "../components/Searchbar";

const Table = ({ title, rows, data }) => {

  if (!data) return null;
  if (!rows) return null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div>asasdasdasdsaasdsadd</div>
        <Searchbar />
      </header>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {rows.map((label) => {
              return (
                <th className={styles.th} key={label}>
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((object, index) => {
            return (
              <tr key={index + "asjdisafjdsdgh"}>
                {Object.keys(object).map((td) => {
                  if (td === "salary")
                    return (
                      <td className={styles.td} key={object[td].name}>
                        {object[td].toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                    );
                  else
                    return (
                      <td className={styles.td} key={object[td].name}>
                        {object[td].toString()}
                      </td>
                    );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
