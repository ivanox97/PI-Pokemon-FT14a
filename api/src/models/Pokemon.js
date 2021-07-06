const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    idPokemon:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // type: {
    //   type: DataTypes.Sequelize.ARRAY(Sequelize.TEXT),
    //   allowNull:
    // },
    health: { type: DataTypes.INTEGER },
    strength: { type:DataTypes.INTEGER },
    defense: { type: DataTypes.INTEGER },
    speed: { type: DataTypes.INTEGER },
    height: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.INTEGER }
  });

  sequelize.define('tipo', {
    idType: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
};
