module.exports = function(sequelize, DataTypes) {
    var WorkoutInstance = sequelize.define("workout_instance", {
        workout_template: DataTypes.INTEGER,
        workout_details: DataTypes.JSON,
        user_id: DataTypes.INTEGER,
    });
    return WorkoutInstance;
}