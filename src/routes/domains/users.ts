import express from "express";

const users = express.Router();

users.get("/", (_req, res) => {
  res.send({ message: "users" }).end();
});

export default users;
