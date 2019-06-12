module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        email: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_name: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
        gender: DataTypes.STRING
    });
    return User;
}