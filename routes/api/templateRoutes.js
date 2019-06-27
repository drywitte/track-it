const db = require("../../models");
const router = require("express").Router();
const Sequelize = require('sequelize');     

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
        db.Workout_template.findAll({
            attributes: {
                include: [[Sequelize.fn("COUNT", Sequelize.col("WorkoutTemplateId")), "tracked_count"]]
            },
            include: [{
                model: db.Workout_instance, attributes: []
            }],
            group: ["Workout_template.id"]
        }).then(function(dbres) {
            res.json(dbres);
        }).catch(function (err) {
            res.json(err);
        })
    })

module.exports = router;