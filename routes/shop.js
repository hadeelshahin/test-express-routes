const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir=require('../utilities/path');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
