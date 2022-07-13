import React from "react";
import styles from "./Table.module.scss";
import HeaderTable from "../HeaderTable/HeaderTable.js";
import TableBody from "../TableBody/TableBody.js";

const Table = ({ rows }) => {
  return (
    <table className={styles.container}>
      <HeaderTable />
      <TableBody rows={rows} />
    </table>
  );
};

export default Table;
