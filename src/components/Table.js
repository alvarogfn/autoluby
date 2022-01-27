import React from "react";
import styles from "./styles/Table.module.css";
import Searchbar from "../components/Searchbar";
import Pagination from "./Pagination";

const Table = ({
  title,
  rows,
  data,
  centralize,
  perPage,
  currentPage,
  totalRecords,
  changePage,
  searchBar,
}) => {
  if (!rows) return null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.pagination}>
          <Pagination
            index={0}
            perPage={perPage}
            currentPage={currentPage}
            totalRecords={totalRecords}
            changePage={changePage}
          />
        </div>
        <div className={styles.searchbar}>
          <Searchbar onChange={searchBar} />
        </div>
      </header>
      <div className={styles.tableContainer}>
        <table className={`${styles.table} ${centralize && styles.centralize}`}>
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
          {data && (
            <tbody>
              {data.map((object, index) => {
                return (
                  <tr key={index + "tableRow"}>
                    {Object.keys(object).map((td, index) => {
                      if (td === "salary" || td === "value") {
                        return (
                          <td className={styles.td} key={index + "tableData"}>
                            {object[td].toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </td>
                        );
                      } else if (td === "chassi") {
                        return (
                          <td className={styles.td} key={index + "tableData"}>
                            {object[td].slice(0, 3)}
                          </td>
                        );
                      } else if (td === "status") {
                        const value = object[td].toLowerCase();
                        if (value === "disponível") {
                          return (
                            <td className={styles.td} key={index + "tableData"}>
                              <div className={styles.green}>{object[td]}</div>
                            </td>
                          );
                        } else if (value === "reservado") {
                          return (
                            <td className={styles.td} key={index + "tableData"}>
                              <div className={styles.yellow}>{object[td]}</div>
                            </td>
                          );
                        } else if (value === "vendido") {
                          return (
                            <td className={styles.td} key={index + "tableData"}>
                              <div className={styles.red}>{object[td]}</div>
                            </td>
                          );
                        } else
                          return (
                            <td key={index + "tableData"}>{object[td]}</td>
                          );
                      } else {
                        return (
                          <td className={styles.td} key={index + "tableData"}>
                            {object[td].toString()}
                          </td>
                        );
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
