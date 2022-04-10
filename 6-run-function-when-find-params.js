/*********************************/
/* Run function, when find param */
/*********************************/

const express = require("express");
const app = express();
app.listen(3000);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Welcome to the path '/'");
  res.send("Welcome to the path '/'");
});

const funcWithParamsUser = require("./routes/functionsWithParams.js");
app.use("/users", funcWithParamsUser);
