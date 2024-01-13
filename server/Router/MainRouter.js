const express = require("express");
const router = express.Router();
const { Users, Admins } = require("../models");
router.get("/", async (req, res) => {
  const userData = await Users.findAll();
  res.json(userData);
});
router.post("/", async (req, res) => {
  const bod = req.body;
  await Users.create(bod);
  res.send(bod);
});
router.get("/admins", async (req, res) => {
  const userData = await Admins.findAll();
  res.json(userData);
});
router.post("/admins", async (req, res) => {
  const bod = req.body;
  await Admins.create(bod);
  res.send(bod);
});
module.exports = router;
