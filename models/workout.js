module.exports = function(sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
        name: DataTypes.STRING
    });
    return Workout;
}