const db = require("../../models");
const router = require("express").Router();

router.route("/create")
    .post(function(req, res) {
        db.Workout_template.create(req.body).then(function(dbres) {
            res.json(dbres)
        }).catch(function(err) {
            res.json(err);
        })
    })

router.route("/")
    .get(function(req, res) {
        db.Workout_template.findAll({}).then(function(dbres) {
            res.json(dbres);
        }).catch(function (err) {
            res.json(err);
        })
    })

module.exports = router;