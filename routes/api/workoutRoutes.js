const db = require("../../models");
const router = require("express").Router();

router.route("/:userid")
  .get(function(req, res) {
      let userid = req.params.userid;
      db.Workout_instance.findAll({
          where: {
              UserId: userid
        }
        }).then(function(response) {
            res.json(response);
    })
  })


module.exports = router;