var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("var:", process.env.NOME);
  res.send("respond with a resource var:" + process.env.NOME);
});

module.exports = router;
