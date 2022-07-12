import promiseMySql from "mysql2/promise";
import { MYSQL_CONFIG } from "../constants/config.js";


export const getDBConn = () => {
  const pool = promiseMySql.createPool(MYSQL_CONFIG);
  return pool.getConnection();
};
