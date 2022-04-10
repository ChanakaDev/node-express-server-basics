const express = require("express");

const router = express.Router();

router
  .route("/:userID")
  .get((req, res) => {
    let user = req.params.userID;
    res.send(`get request: ${user}`);
  })
  .put((req, res) => {
    let user = req.params.userID;
    res.send(`put request: ${user}`);
  })
  .delete((req, res) => {
    let user = req.params.userID;
    res.send(`delete request: ${user}`);
  });

/* 
Following function will RUN, whenever it find params 

param is a middleware, that means it runs between req and res. 
as you can see there is a function parameter called next in param. 
so, we need to run that after doing things in param. 
otherwise webpage load infinately.
*/

router.param("userID", (req, res, next, userID) => {
  console.log(userID);
  // you must call the following
  next();
});

module.exports = router;
