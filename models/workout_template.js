module.exports = function(sequelize, DataTypes) {
    var WorkoutTemplate = sequelize.define("workout_template", {
        name: DataTypes.STRING,
        workout_structure: DataTypes.JSON,
        creator_id: DataTypes.INTEGER,
    });
    return WorkoutTemplate;
}