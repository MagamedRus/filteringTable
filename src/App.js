import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table.js";
import { getAllPoints } from "./controllers/mappoints.js";

function App(props) {
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    (async function () {
      const allPoints = await getAllPoints();
      allPoints[0] && setRowsData(allPoints);
      console.log(allPoints)
    })();
  }, []);

  return (
    <div>
      <Table rows={rowsData} />
    </div>
  );
}

export default App;
