import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table.js";
import { getAllPoints } from "./controllers/mappoints.js";
import styles from "./App.module.scss";

function App(props) {
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    async function uploadData() {
      const allPoints = await getAllPoints();
      allPoints[0] && setRowsData(allPoints);
    }
    uploadData();
  }, []);

  return (
    <div className={styles.container}>
      <Table rows={rowsData} />
    </div>
  );
}

export default App;
