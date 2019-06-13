module.exports = function(sequelize, DataTypes) {
    var WorkoutInstance = sequelize.define("Workout_instance", {
        workout_details: DataTypes.JSON,
    });

    return WorkoutInstance;
}