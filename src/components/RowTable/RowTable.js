import React, { memo } from "react";
import styles from "./RowTable.module.scss";

const RowTable = ({ date, name, count, distance }) => (
  <tr className={styles.container}>
    <td>{date}</td>
    <td>{name}</td>
    <td>{count}</td>
    <td>{distance}</td>
  </tr>
);

export default memo(RowTable);
