const pets = require("./pets");

module.exports = (sequelize, DataTypes) => {
    const Coments = sequelize.define('Coments', {
      idcoment: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_pet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:pets,
          key: 'id_pet',
        }
      },
      body: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      date: {
        type: DataTypes.Date,
        allowNull: false
      }
    }, {
      tableName: 'COMENTS',
      timestamps: false
    });
  
    return Coments;
  };
  