var express = require("express");
var router = express.Router();

// set up the database connection
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../mydb.db");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
