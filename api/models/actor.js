'use strict';
module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define('Actor', {
        name: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        status: DataTypes.BOOLEAN,
        cache: DataTypes.INTEGER
    }, {});
    Actor.associate = function(models) {
        //belongsToMany es de muchos a muchos, porque el Actor puede estar en varias películas y una película tiene varios actores
        Actor.belongsToMany(models.Movie, {
            through: models.ActorMovie //esta opción especifica a través de que modelo intermedio se relacionan ambas entidades
        })
    };
    return Actor;
};