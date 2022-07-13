import React from "react";
import RowTable from "../RowTable/RowTable.js";
import styles from "./TableBody.module.scss";

const TableBody = ({ rows }) => {
  const composeDate = (date) => {
    const dateArr = date.substr(0, 10).split('-')
    return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
  };

  return (
    <tbody className={styles.container}>
      {rows.map((el) => (
        <RowTable
          key={el.id}
          name={el.name}
          count={el.count}
          distance={el.distance}
          date={composeDate(el.date)}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
