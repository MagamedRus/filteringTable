import React, { memo } from "react";
import styles from './HeaderTable.module.scss';

const HeaderTable = () => (
  <thead className={styles.container}>
    <tr className={styles.row}>
      <th>Дата</th>
      <th>Название</th>
      <th>Количество</th>
      <th>Расстояние</th>
    </tr>
  </thead>
);

export default memo(HeaderTable);
