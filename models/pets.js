module.exports = (sequelize, DataTypes) => {
const Pets = sequelize.define('Pets', {
  id_pet: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_category: {
    type: DataTypes.INTEGER,
    References:{
      model: category,
      key: 'id_category',
    }
  },
  name: {
    type: DataTypes.STRING(35),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'PETS',
  timestamps: false,
});

return Pets;

}