module.exports = function(sequelize, DataTypes) {
    var WorkoutTemplate = sequelize.define("Workout_template", {
        name: DataTypes.STRING,
        workout_structure: DataTypes.JSON,
    });

    WorkoutTemplate.associate = function(models) {
        WorkoutTemplate.hasOne(models.Workout_instance);
        WorkoutTemplate.belongsTo(models.User);
    };

    return WorkoutTemplate;
}