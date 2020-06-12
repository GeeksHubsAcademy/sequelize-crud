'use strict';
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poster_path: DataTypes.STRING,
        overview: DataTypes.TEXT,
        DirectorId: DataTypes.INTEGER
    }, {});
    Movie.associate = function(models) {
        // associations can be defined here
        Movie.belongsTo(models.Director)
            //La Movie pertenece a un Director
    };
    return Movie;
};