module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_name: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
        gender: DataTypes.STRING
    });

    User.associate = function(models) {
        User.hasOne(models.Workout_instance);
        User.hasOne(models.Workout_template, 
            //{foreignkey: "creator_id"}
            );
    };

    return User;
}

