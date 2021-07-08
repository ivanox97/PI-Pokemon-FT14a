const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('type', {
    // id: {
    //   type:DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false,
    //   autoIncrement: true,
    //   unique: true
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};