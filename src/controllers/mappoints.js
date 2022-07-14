import axios from "axios";
import { URL_DELETE_ALL, URL_SERVER, URL_MAPPOINTS } from "../constants/api.js";

/** get map points */
export const getAllPoints = async () => {
  let result = [];

  await axios
    .get(URL_SERVER + URL_MAPPOINTS, {
      headers: {
        "Cache-Control": "no-cache", // without it, we have have 304 status on req
      },
      params: { maxUsers: 200 },
    })
    .then((res) => {
      const data = res.data;
      if (data?.points) {
        result = data.points;
      }
    })
    .catch((err) =>
      console.log("getAllPoints err -", err.response.data.message)
    );

  return result;
};

/** create new row of points */
export const createNewMapPoint = async ({ name, distance, count }) => {
  const currDate = new Date();
  const date = `${currDate.getFullYear()}-${currDate.getMonth()}-${currDate.getDate()}`;
  const data = {
    name,
    distance,
    count,
    date,
  };
  await axios
    .post(URL_SERVER + URL_MAPPOINTS, data)
    .catch((err) =>
      console.log("createNewMapPoint err -", err.response.data.message)
    );
};

/** delete all map points  */
export const deleteAllPoints = async () => {
  let result = false;
  await axios
    .delete(URL_SERVER + URL_DELETE_ALL)
    .then((res) => {
      const data = res.data;
      if (data?.isSuccess) {
        result = true;
      }
    })
    .catch((err) =>
      console.log("deleteAllPoints err -", err.response.data.message)
    );

  return result;
};
