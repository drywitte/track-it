var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_name: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
        gender: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,22]
            }
        }
    });

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.beforeCreate(function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    User.associate = function(models) {
        User.hasOne(models.Workout_instance);
        User.hasOne(models.Workout_template, 
            //{foreignkey: "creator_id"}
            );
    };



    return User;
}

