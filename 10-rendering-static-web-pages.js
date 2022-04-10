/*******************************************************/
/* Rendering(Serving) static web pages (HTML, CSS, JS) */
/*******************************************************/

const express = require("express");
const app = express();
app.listen(3000);
app.set("view engine", "ejs");

// serve public folder
// we use 'Express static middleware' here
app.use(express.static("public"));

// now we can go to the web browser and directly access the 'index.html' file
// if you need to access the 'public/sub-folder/test.html' all you have to do
// is type the path in your web browser as 'http://localhost:3000/sub-folder/test.html'

const usersRouter = require("./routes/users.js");
app.use("/users", usersRouter);
