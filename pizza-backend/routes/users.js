var express = require("express");
var router = express.Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("menu.db");

/* GET users listing. */
router.get("/", function (req, res, next) {
  db.all("SELECT title, description FROM menu", (err, rows) => {
    if (err) throw err;
    res.send(JSON.stringify(rows));
  });
});

module.exports = router;
