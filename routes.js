// Libraries
require("dotenv").config();
var express = require("express");
var router = express.Router();

try {
  // Root URl
  //Is Server run API call
  router.get("/", (req, res) =>
    res.send("Node application API's is ready to use")
  );
} catch (error) {
  console.log(error, "router");
}
// module.exports = {router}
module.exports = router;
