'use strict';
module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define('Director', {
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  Director.associate = function(models) {
    // associations can be defined here
  };
  return Director;
};