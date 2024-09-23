const coments = require("./coments");
const pets = require("./pets");

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      id_post: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_pet: {
        type: DataTypes.INTEGER,
        References:{
          model: pets,
          key: 'id_pet',
        }
      },
      id_comment: {
        type: DataTypes.INTEGER,
        References:{
          model: coments,
          key: 'id_comment',
        }
      },
      date: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING(100),
      }
    }, {
      tableName: 'POST',
      timestamps: false,
    });
    
    return Post;
    
    }