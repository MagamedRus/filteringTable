import {
  ALL,
  FROM,
  INSERT,
  INTO,
  SELECT,
  VALUES,
  NULL,
  DELETE,
} from "../constants/db/dbRequestElements.js";
import { MAP_POINTS } from "../constants/db/dbTableNames.js";
import { mappointsScheme } from "../constants/db/dbTableSchemes.js";

/** Create data to table mapppoints */
export const createMapPoints = ({ date, name, count, distance }) => {
  const leftPartReq = `${INSERT} ${INTO} ${"`"}${MAP_POINTS}${"`"} ${mappointsScheme}`;
  const reqBody = `${NULL}, '${date}', '${name}', ${count}, ${distance}`;
  return `${leftPartReq} ${VALUES} (${reqBody})`;
};

/** Read all data from table mappoints */
export const readAllMapPoints = () => `${SELECT} ${ALL} ${FROM} ${MAP_POINTS}`;

export const deleteAllPoints = () => `${DELETE} ${FROM} ${MAP_POINTS}`;
