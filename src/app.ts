import cors from "cors";
import morgan from "morgan";
import express from "express";
import root from "./routes/root";
import config from "./config";

const app = express();

/* eslint-disable-next-line */
const origin = config.clientOrigins[config.nodeEnv];

// Apply most middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: origin,
  })
);
app.use(morgan("tiny"));
app.use("/", root);

export default app;
