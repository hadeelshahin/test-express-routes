const express = require("express");


const path = require("path");
const router = express.Router();
const rootDir=require('../utilities/path');
router.get("/admin/add-product", (req, res, next) => {
  //   res.send(
  //     "<html><head><title>products</title><body><form action='/admin/add-product' method='POST'><input type='text' name='title' /><button type='submit'>Add Product</button></form></body></head></html>"
  //   );
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/admin/add-product", (req, res, next) => {  //to handle form submmition
 // console.log(req.body);
  res.redirect("/");
});
module.exports = router;
