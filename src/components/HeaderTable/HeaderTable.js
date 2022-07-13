import React, { memo } from "react";

const HeaderTable = () => (
  <thead>
    <tr>
      <th>Дата</th>
      <th>Название</th>
      <th>Количество</th>
      <th>Расстояние</th>
    </tr>
  </thead>
);

export default memo(HeaderTable);
