const express = require("express");

const router = express.Router();
// const db = require("../config/db");
const Tir = require("../models/Tir");

router.get("/", (req, res) => {
  Tir.findAll()
    .then((d) => {
      res.send(d);
      // res.sendStatus(200);
    })
    .catch(err => console.log(err));
});

router.get("/add", (req, res) => {
  Tir.create({
    title: "another one",
  })
    .then(() => {
      res.redirect("/tir");
    })
    .catch(err => console.log(err));
});

module.exports = router;
