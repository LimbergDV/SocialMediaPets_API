const pets = require("./pets");

module.exports = (sequelize, DataTypes) => {
const Friend = sequelize.define('Friend', {
  id_friend: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_pet: {
    type: DataTypes.INTEGER,
    references: {
      model: pets,
      key: 'id_pet',
    },
  }
}, {
  tableName: 'FRIENDS',
  timestamps: false,
});

return Friend;

}