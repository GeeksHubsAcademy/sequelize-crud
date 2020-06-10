'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    poster_path: DataTypes.STRING,
    overview: DataTypes.TEXT
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};