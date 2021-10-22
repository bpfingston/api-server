'use strict';

const restaurant = (sequelize, DataTypes) => sequelize.define('restaurant', {
  title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeOfFood:{
    type: DataTypes.STRING,
    allowNull: false,
  },
});
  
module.exports = restaurant;