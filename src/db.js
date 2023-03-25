const { Sequelize } = require("sequelize");
require("dotenv").config();
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
   // {logging: false}
);

// crear modelos
UserModel(sequelize);


module.exports = {
   sequelize
}