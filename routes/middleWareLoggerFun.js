const express = require("express");
const router = express.Router();

router
  .route("/:userID")
  .get((req, res) => {
    res.send(`get request: ${req.params.userID}`);
  })
  .put((req, res) => {
    res.send(`put request: ${req.params.userID}`);
  })
  .delete((req, res) => {
    res.send(`delete request: ${req.params.userID}`);
  });

router.param("userID", (req, res, next, userID) => {
  console.log(`User: ${userID}`);
  next();
});

module.exports = router;
