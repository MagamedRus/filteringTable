import express from "express";
import { PORT } from "./constants/config.js";
import { ROUTE_API } from "./constants/routes.js";
import cors from "cors";
import morgan from "morgan";
import routerMappoints from "./routes/mappoints.js";

// express config
const app = express();
const _cors = cors({
  origin: "*",
});
app.use(express.json({limit: '1mb'}));
app.use(_cors);
app.use(morgan("dev"));
app.use(ROUTE_API, routerMappoints);

async function startApp() {
  try {
    app.listen(PORT, () => console.log("server is working on port", PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
