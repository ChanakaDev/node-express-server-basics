const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Welcome to the path '/users'");
  res.send("Welcome to the path '/users'");
});

router.post("/", (req, res) => {
  console.log("Create User");
  res.send("Create User");
});

router.get("/:userID", (req, res) => {
  let user = req.params.userID;
  console.log(`userID: ${user}`);
  res.send(`userID: ${user}`);
});

/*
order of the routes are matters
===============================
if we put this below, the "/:userID" the program takes "/new" as a userID :(
so, you must care about the order of the routes in the routes file.
*/
router.get("/new", (req, res) => {
  console.log("Welcome to the path '/users/new'");
  res.send("Welcome to the path '/users/new'");
});

module.exports = router;
