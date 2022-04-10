const express = require("express");
const router = express.Router();

/*
Suppose, we need to do 
    get
    update
    and delete
data related to a 'userID'

In this case, we need 3 requests
    get
    put
    delete

Let's define them
*/

// router.get("/:userID", (req, res) => {
//   let user = req.params.userID;
//   res.send(`get request: ${user}`);
// });

// router.put("/:userID", (req, res) => {
//   let user = req.params.userID;
//   res.send(`put request: ${user}`);
// });

// router.delete("/:userID", (req, res) => {
//   let user = req.params.userID;
//   res.send(`delete request: ${user}`);
// });

/*
Let's try and see what will happen when we run this path in browser.
(*) !important: it recognise the requst as a get request (default behaviour)
*/

/*
We can write exact same routes above as follows
===============================================
*/

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

module.exports = router;
