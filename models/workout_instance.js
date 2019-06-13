module.exports = function(sequelize, DataTypes) {
    var WorkoutInstance = sequelize.define("Workout_instance", {
        workout_details: DataTypes.JSON,
    });

    WorkoutInstance.associate = function(models) {
        WorkoutInstance.belongsTo(models.User);
        WorkoutInstance.belongsTo(models.Workout_template);
    }

    return WorkoutInstance;
}