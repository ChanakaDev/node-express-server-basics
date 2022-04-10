/***********************************/
/* How to create an express server */
/***********************************/

// step 01: import express
const express = require("express");
// step 02: calling express as a function
const app = express();

// step 03: assign a port to make our server run
app.listen(3000);

// (optional) step 05: set view engine to render html pages
// important: you have to install particular engine, before set here
app.set("view engine", "ejs");

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
  // res.json({ message: "Error" });

  // (vi) sending a file for user to download
  // res.download("app.js");

  // (vii) rendering a HTML file
  // res.render('index');
  /*
  (*) output: 'Error: No default engine was specified and no extension was provided.'
  (*) 'res.render()' method didn't support as expected. 
  (*) So, you need to install a html rendering engine to render html pages with 'res.ender()' method 
  (*) run 'npm i ejs'
  (*) then rename your 'index.html' file as 'index.ejs'
  (*) if you're using vs code, install 'EJS language support' extension
  */

  // (vii) passing variables from server(app.js) to views(index.ejs)
  // res.render('index', {text : 'Hello World'});
});
