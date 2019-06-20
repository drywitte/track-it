const db = require("../../models");
const router = require("express").Router();

router.route("/:userid")
  .get(function(req, res) {
      let userid = req.params.userid;
      db.Workout_instance.findAll({
          where: {
              UserId: userid
        },
        include : [{
          model: db.Workout_template}, 
          {model: db.User}]
        }).then(function(response) {
            res.json(response);
    })
  })

router.route("/create")
  .post(function(req, res) {
    db.Workout_instance.create(req.body)
      .then(function(dbres) {
        res.json(dbres);
      })
      .catch(function(err) {
        res.json(err);
      })
  })


module.exports = router;