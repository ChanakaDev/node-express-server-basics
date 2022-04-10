/****************************************/
/* run logger function with an endpoint */
/****************************************/

const express = require("express");
const app = express();
app.listen(3000);
app.set("view engine", "ejs");

// 01: without using like this
// app.use(urlLogger);

// 02: we can use it like this as a parameter.
// (then it will only run with this end point)
app.get("/", urlLogger, (req, res) => {
  res.send("Welcome to the path '/'");
});

function urlLogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

const middleWareLoggerFun = require("./routes/middleWareLoggerFun.js");
app.use("/users", middleWareLoggerFun);
