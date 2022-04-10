/********************/
/* Importing Routes */
/********************/

const express = require("express");
const app = express();
app.listen(3000);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Welcome to the path '/'");
  res.send("Welcome to the path '/'");
});

// step 06: import the users routers from './routes/user.js'
// -------------------
const userRouter = require("./routes/users.js");
// step 07: use routes
// -------------------
/*
(*) we removed '/users' from the 'users.js' routes file. 
(*) express automatically nest that path with following '/users'
(*) that's how it's work same as before
*/
app.use("/users", userRouter);
