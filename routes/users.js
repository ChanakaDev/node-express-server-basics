/**************************/
/* Make routes importable */
/**************************/

// step 01: import exress
// -------------------
const express = require("express");

// step 02: create a router
// -------------------
const router = express.Router();

// step 03: rename 'app' to 'router'
// step 04: remove 'user' from the path
// -------------------
router.get("/", (req, res) => {
  console.log("Welcome to the path '/users'");
  res.send("Welcome to the path '/users'");
});

router.get("/new", (req, res) => {
  console.log("Welcome to the path '/users/new'");
  res.send("Welcome to the path '/users/new'");
});

// step 05: export router to use in 'app.js'
// -------------------
module.exports = router;
