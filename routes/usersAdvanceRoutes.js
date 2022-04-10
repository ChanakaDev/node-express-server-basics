const express = require("express");

const router = express.Router();

// Basic routes
// ============================
router.get("/", (req, res) => {
  console.log("Welcome to the path '/users'");
  res.send("Welcome to the path '/users'");
});

router.get("/new", (req, res) => {
  console.log("Welcome to the path '/users/new'");
  res.send("Welcome to the path '/users/new'");
});

// Advance routes
// ============================
router.post("/", (req, res) => {
  console.log("Create User");
  res.send("Create User");
});

// advance route with dynamic url
/*
suppose, you need to do something for any userID

for examples:
    /users/1
    /users/2
    /users/5
    /users/10
    /users/124

in that case we use that as a variable 
to use userID as a variable, we need to put a ':' in front of that

for example:
    /users/:userID

*/
router.get("/:userID", (req, res) => {
  // access given 'userID' from 'params'
  let user = req.params.userID;
  ////
  console.log(`userID: ${user}`);
  res.send(`userID: ${user}`);
});

module.exports = router;
