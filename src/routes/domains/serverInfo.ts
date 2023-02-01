import express from "express";
import config from "../../config";

const serverInfo = express.Router();

serverInfo.use("/server-info", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    res.send(config);
    return;
  }

  res.redirect("/");
});

export default serverInfo;
