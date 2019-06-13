module.exports = function(sequelize, DataTypes) {
    var WorkoutInstance = sequelize.define("Workout_instance", {
        workout_template: DataTypes.INTEGER,
        workout_details: DataTypes.JSON,
        user_id: DataTypes.INTEGER,
    });

    WorkoutInstance.associate = function(models) {
        WorkoutInstance.belongsTo(models.User);
    };

    return WorkoutInstance;
}