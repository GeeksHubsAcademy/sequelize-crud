'use strict';
module.exports = (sequelize, DataTypes) => {
    const Director = sequelize.define('Director', {
        name: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        status: DataTypes.BOOLEAN
    }, {});
    Director.associate = function(models) {
        // associations can be defined here
        Director.hasMany(models.Movie);
        //El Director tiene muchas movies One To Many
    };
    return Director;
};