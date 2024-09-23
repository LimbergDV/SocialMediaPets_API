const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
'Test_ORM', // esto lo cambian por el nombre de la db vacia que crearon en mysql
  'root',
  'adrian0710200512#12#', //esta es la contraseña de mysql
  {
    host:"localhost",
    dialect: "mysql"
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.User = require('./profile')(sequelize, Sequelize);
db.Airplane = require('./coments')(sequelize, Sequelize);
db.Book = require('./friends')(sequelize,Sequelize);
db.DataBank= require('./owner')(sequelize,Sequelize);
db.Passenger = require('./pets')(sequelize,Sequelize);




module.exports = db;
