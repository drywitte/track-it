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
        })
        .then(function(data) {
            res.json(data);
        })
        .catch(err => res.status(422).json(err))
  })
  
router.route("/ids/:userid")
  .get(function(req, res) {
      let userid = req.params.userid;
      db.Workout_instance.findAll({
          where: {
              UserId: userid
          }
        })
        .then(function(data) {
          res.json(data);
        })
        .catch(err => res.status(422).json(err))
  })

router.route("/create")
  .post(function(req, res) {
    db.Workout_instance.create(req.body)
      .then(function(data) {
        res.json(data);
      })
      .catch(err => res.status(422).json(err))
  })


module.exports = router;