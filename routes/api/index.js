const router = require("express").Router();
const userRoutes = require("./userRoutes");
const workoutRoutes = require("./workoutRoutes");
const templateRoutes = require("./templateRoutes");

router.use("/users", userRoutes);
router.use("/workouts", workoutRoutes);
router.use("/templates", templateRoutes);

module.exports = router;
