import React from "react";
import styles from "./styles/Pagination.module.css";

const Pagination = ({ perPage, currentPage, totalRecords, changePage }) => {
  const totalPage = React.useMemo(() => {
    if (!!totalRecords === false || !!perPage === false) return 1;
    return Math.ceil(totalRecords / perPage);
  }, [perPage, totalRecords]);

  const controlPreviousDisabled = currentPage === 1;
  const controlNextDisabled = currentPage >= totalPage;

  return (
    <nav className={styles.pagination}>
      <button
        disabled={controlPreviousDisabled}
        className={styles.button}
        onClick={() => changePage(currentPage - 1)}
      >
        Anterior
      </button>
      <ul className={styles.list}>
        {[...Array(!!totalPage ? totalPage : 1).keys()].map((page, index) => {
          return (
            <li className={styles.item} key={index + "page"}>
              <button
                onClick={() => changePage(index + 1)}
                className={`${styles.index} ${
                  currentPage - 1 === index && styles.activeIndex
                }`}
              >
                {page + 1}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        disabled={controlNextDisabled}
        className={styles.button}
        onClick={() => changePage(currentPage + 1)}
      >
        Próximo
      </button>
    </nav>
  );
};

export default Pagination;
