module.exports = function(sequelize, DataTypes) {
    var WorkoutInstance = sequelize.define("Workout_instance", {
        workout_template: DataTypes.INTEGER,
        workout_details: DataTypes.JSON,
    });

    // WorkoutInstance.associate = function(models) {
    //     WorkoutInstance.belongsTo(models.User);
    // };

    return WorkoutInstance;
}