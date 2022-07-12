import { getDBConn } from "../common/sqlConnection.js";
import { isNumber, isString, isValidDate } from "../common/validations.js";
import {
  readAllMapPoints,
  createMapPoints,
  deleteAllPoints,
} from "../dbRequests/mappointsReq.js";

class MappointsController {
  async getAllPoints(req, res) {
    let pool = null;
    try {
      pool = await getDBConn();
      const [points] = await pool.execute(readAllMapPoints());
      res.json({ points });
    } catch (e) {
      console.log("getAllPoints error -", e);
      res.status(500).json(e);
    }

    pool && pool.close();
  }

  async createPoint(req, res) {
    let pool = null;
    try {
      let data = req.body;
      // const { date, name, count, distance } = data;
      const isGoodDate = isValidDate(data?.date);
      const isGoodOther =
        isString(data?.name) &&
        isNumber(data?.count) &&
        isNumber(data?.distance);
      if (!isGoodDate) {
        res
          .status(400)
          .json({ message: "incorrect date, format is yyyy-mm-dd" });
      } else if (!isGoodOther) {
        res.status(400).json({
          message: "incorrect body params: name || count || distance",
        });
      } else {
        pool = await getDBConn();
        await pool.execute(createMapPoints(data));
        res.json({ isSuccess: true });
      }
    } catch (e) {
      console.log("createPoint error -", e);
      res.status(500).json(e);
    }

    pool && pool.close();
  }

  async deleteAll(req, res) {
    let pool = null;
    try {
      pool = await getDBConn();
      await pool.execute(deleteAllPoints());
      res.json({ isSuccess: true });
    } catch (e) {
      console.log("deleteAll error -", e);
      res.status(500).json(e);
    }

    pool && pool.close();
  }
}

export default MappointsController;
