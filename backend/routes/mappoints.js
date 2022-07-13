import { Router } from "express";
import { ROUTE_MAPPOINTS, DELETE_ALL } from "../constants/routes.js";
import MappointsController from "../controllers/MappointsController.js";

const routerMappoints = new Router();
const authController = new MappointsController();

routerMappoints.get(ROUTE_MAPPOINTS, (req, res) =>
  authController.getAllPoints(req, res)
);

routerMappoints.post(ROUTE_MAPPOINTS, (req, res) => {
  authController.createPoint(req, res);
});

routerMappoints.delete(DELETE_ALL, (req, res) => {
  authController.createPoint(req, res);
});

export default routerMappoints;
