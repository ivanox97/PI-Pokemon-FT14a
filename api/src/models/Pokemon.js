const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    type: { 
      type: DataTypes.ENUM("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19", "20"),
      //allowNull: false,
    },
    // type: {
    //   type: DataTypes.VIRTUAL,
    //   allowNull:
    // },
    //imagen tiene que ser virtual;
    health: { type: DataTypes.INTEGER },
    strength: { type:DataTypes.INTEGER },
    defense: { type: DataTypes.INTEGER },
    speed: { type: DataTypes.INTEGER },
    height: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.INTEGER }
  });
};
