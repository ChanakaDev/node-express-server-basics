/**********/
/* Routes */
/**********/

const express = require("express");
const app = express();
app.listen(3000);
app.set("view engine", "ejs");

// route 01: simple get request
app.get("/", (req, res) => {
  console.log("Welcome to the path '/'");
  res.send("Welcome to the path '/'");
});

// route 02: get request to the path '/users'
app.get("/users", (req, res) => {
  console.log("Welcome to the path '/users'");
  res.send("Welcome to the path '/users'");
});

// route 03: get request to the path '/users/new'
app.get("/users/new", (req, res) => {
  console.log("Welcome to the path '/users/new'");
  res.send("Welcome to the path '/users/new'");
});

/*

(*) above approach is not good, that's why we create a separate diretory called 'routes' 
(*) there we create js file like 'users.js', 'teachers.js', 'admins.js', 'customers.js' 
    bla bla bla to separate set of routes from each other

*/
