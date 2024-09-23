const owner = require("./owner");
const pets = require("./pets");

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id_category: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    type_specie: {
        type: DataTypes.STRING(35),
        allowNull: false
      },
  }, {
    tableName: 'CATEGORY',
    timestamps: false
  });

  return Category;
};