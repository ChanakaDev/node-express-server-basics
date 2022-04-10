const express = require("express");

const router = express.Router();

router
  .route("/:userID")
  .get((req, res) => {
    let user = req.params.userID;
    res.send(`get request: ${user}`);
    // as you can see, the variable in line 25, can be access here
    console.log(req.user); // this
  })
  .put((req, res) => {
    let user = req.params.userID;
    res.send(`put request: ${user}`);
  })
  .delete((req, res) => {
    let user = req.params.userID;
    res.send(`delete request: ${user}`);
  });

const users = [{ name: "Kasun" }, { name: "Chamal" }]; // this

router.param("userID", (req, res, next, userID) => {
  req.user = users[userID]; // this
  next();
});

module.exports = router;
