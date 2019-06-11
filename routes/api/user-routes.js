const db = require("../../models");
const router = require("express").Router();

router.route("/")
  .get(function(app) {
      console.log("hello")
      db.User.findAll(
      ).then(function(response) {
          console.log("here's a response")
        res.json(response);
      })
    })


module.exports = router;