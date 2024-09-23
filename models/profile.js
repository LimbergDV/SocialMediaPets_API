const owner = require("./owner");
const pets = require("./pets");

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    iduser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_pet: {
      type: DataTypes.INTEGER,
      references:{
        model:pets,
        key:'id_pet',
      }
    },
    id_owner: {
      type: DataTypes.INTEGER,
      references:{
        model:owner,
        key:'id_owner',
      }
    },
  }, {
    tableName: 'PROFILE',
    timestamps: false
  });

  return Profile;
};
