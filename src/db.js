const { Sequelize } = require("sequelize");
require("dotenv").config();
// create on root path a archive .env with your data connection.
const {
   DB_USER,
   DB_PASSWORD,
   DB_HOST,
   DB_NAME,
   DB_TYPE,
} = process.env;

// modelos:
const UserModel = require("./models/User");

// conexion
const sequelize = new Sequelize (
   `${DB_TYPE}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {logging: false}
);

// crear modelos
UserModel(sequelize);

// console.log(sequelize.models); 

// relaciones 


module.exports = {
   sequelize,
   // Muy importante exportar los modelos para poder obtenerlos
   ...sequelize.models
}