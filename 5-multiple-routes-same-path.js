/*********************************/
/* Multiple routes for same path */
/*********************************/

const express = require("express");
const app = express();
app.listen(3000);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Welcome to the path '/'");
  res.send("Welcome to the path '/'");
});

// imported the advanced routes file
const userMultipleRoutes = require("./routes/userMultipleRoutes.js");
app.use("/users", userMultipleRoutes);
