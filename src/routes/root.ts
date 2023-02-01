import express from "express";
import * as routes from "./domains";

const root = express.Router();

root.use("/users", routes.userRouter);
root.use("/health", routes.serverInfo);

export default root;
