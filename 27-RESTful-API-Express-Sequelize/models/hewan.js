'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hewan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hewan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      nama: DataTypes.STRING,
      namaSpesies: DataTypes.STRING,
      umur: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: 'Hewan',
      modelName: 'Hewan',
    }
  );
  return Hewan;
};
