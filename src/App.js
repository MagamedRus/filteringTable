import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table.js";
import { getAllPoints } from "./controllers/mappoints.js";
import styles from "./App.module.scss";
import Filter from "./components/Filter/Filter.js";

function App() {
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    (async function () {
      const allPoints = await getAllPoints();
      allPoints[0] && setRowsData(allPoints);
    })();
  }, []);

  const confirmFilters = (filterData) => {
    console.log(filterData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.fixedBackround} />
        <Table rows={rowsData} />
        <Filter confirmFilters={confirmFilters} />
    </div>
  );
}

export default App;
