const db = require("../../models");
const router = require("express").Router();

router.route("/")
  .get(function(req, res) {
      db.User.findAll(
      ).then(function(response) {
      res.json(response);
    })
  })


module.exports = router;