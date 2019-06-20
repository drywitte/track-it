const db = require("../../models");
const router = require("express").Router();
const passport = require("../../config/passport");

router.route("/")
  .get(function(req, res) {
      db.User.findAll({attributes:["id"]}
      ).then(function(response) {
      res.json(response);
    })
  })
  
router.route("/login", passport.authenticate("local"))
  .post(function(req, res) {
    res.redirect("/");
  })

router.route("/signup")
  .post(function(req, res) {
    const body = req.body
    db.User.create(
      {
        email: body.email,
        first_name: body.first_name,
        last_name: body.last_name,
        user_name: body.username,
        date_of_birth: body.date_of_birth,
        gender: body.gender,
        password: body.password
      }
    )
    .then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      res.json(err);
    })
  })


module.exports = router;