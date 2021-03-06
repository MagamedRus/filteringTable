import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table.js";
import { getAllPoints } from "./controllers/mappoints.js";
import styles from "./App.module.scss";
import { getFilteredPoints } from "./common/filters.js";
import AdaptiveFilter from "./components/AdaptiveFilter/AdaptiveFilter.js";

function App() {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    (async function () {
      const allPoints = await getAllPoints();
      allPoints[0] && setRows(allPoints)
      allPoints[0] && setFilteredRows(allPoints);
    })();
  }, []);

  const confirmFilters = (filterData) => {
    const filteredData = getFilteredPoints(filterData, rows);
    setFilteredRows(filteredData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.fixedBackround} />
      <Table rows={filteredRows} />
      <AdaptiveFilter confirmFilters={confirmFilters} />
    </div>
  );
}

export default App;
