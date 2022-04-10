/***********************************/
/* logger function with MiddleWare */
/***********************************/

const express = require("express");
const app = express();
app.listen(3000);
app.set("view engine", "ejs");

// step 02: call function
// *** !important: we must use this top of the page
// if we use this bottom of the page, this won't work for any request in this page.
// because always, middleWare execute from top to bottom.
app.use(urlLogger);

app.get("/", (req, res) => {
  res.send("Welcome to the path '/'");
});

// middle ware function to log the url of the web page
// you can easily identify middleWare functions
// because unlike get, post, put reqests
// we always use the 3rd parameter 'next' in middleWare functions

// step 01: write function
function urlLogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

const middleWareLoggerFun = require("./routes/middleWareLoggerFun.js");
app.use("/users", middleWareLoggerFun);
