module.exports = function(sequelize, DataTypes) {
    var WorkoutTemplate = sequelize.define("Workout_template", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        workout_structure: {
            type: DataTypes.JSON,
            allowNull: false
        }
    });

    WorkoutTemplate.associate = function(models) {
        WorkoutTemplate.hasOne(models.Workout_instance);
        WorkoutTemplate.belongsTo(models.User);
    };

    return WorkoutTemplate;
}