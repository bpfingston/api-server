'use strict';

const food = (sequelize, DataTypes) => sequelize.define('food', {
  title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeOfFood:{
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = food;