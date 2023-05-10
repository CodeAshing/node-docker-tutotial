"use strict";

//Libraries
const express = require("express");
var cookieParser = require("cookie-parser");

// Express Config
const app = express();
app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({limit: '50mb'}));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

// Cors Access
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  return next();
});

// Routes;
app.use(require("./routes"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
