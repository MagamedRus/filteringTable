import React from "react";
import HeaderTable from "../HeaderTable/HeaderTable.js";
import TableBody from "../TableBody/TableBody.js";

const Table = ({rows}) => {
  return (
    <table>
      <HeaderTable />
      <TableBody rows={rows} />
    </table>
  );
};

export default Table;
