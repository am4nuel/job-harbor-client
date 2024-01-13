const express = require("express");
const app = express();
const cors = require("cors");
const mainRouter = require("./Router/MainRouter");
app.use(express.json());
app.use(cors());
app.use("/register", mainRouter);

const db = require("./models");
const { faRetweet } = require("@fortawesome/free-solid-svg-icons");
db.sequelize.sync().then(() => {
  app.listen("3001", () => {
    console.log("hello niga");
  });
});
