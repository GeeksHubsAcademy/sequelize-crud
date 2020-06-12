'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActorMovie = sequelize.define('ActorMovie', {
    ActorId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {});
  ActorMovie.associate = function(models) {
    // associations can be defined here
  };
  return ActorMovie;
};