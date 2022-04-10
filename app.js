/***********************************/
/* How to create an express server */
/***********************************/

// step 01: import express
const express = require("express");
// step 02: calling express as a function
const app = express();

// step 03: assign a port to make our server run
app.listen(3000);

// step 04: define routes
// (*) get request
app.get("/", (req, res) => {
  console.log("Get request");
  // (i) sending response data
  // res.send("Hi");
  // (ii) sending http response codes
  // res.sendStatus(500);
  // (iii) sending http response code with data
  // res.status(500).send("There is an error");
  // (iv) sending some json data with http response
  // res.status(500).json({ meesage: "Error" });
  // (v) sending json data only
  res.json({ message: "Error" });
});
