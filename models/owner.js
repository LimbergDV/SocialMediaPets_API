
module.exports = (sequelize, DataTypes) => {
const Owner = sequelize.define('Owner', {
  id_owner: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(35),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(35),
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
}, {
  tableName: 'OWNER',
  timestamps: false,
});

return Owner;
}
