'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    cache: DataTypes.INTEGER
  }, {});
  Actor.associate = function(models) {
    // associations can be defined here
  };
  return Actor;
};