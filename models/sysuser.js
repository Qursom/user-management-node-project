'use strict';
const {
  Model
} = require('sequelize');
const { role } = require('.');
module.exports = (sequelize, DataTypes) => {
  class SysUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  }
  SysUser.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SysUser',
  });
  return SysUser;
};