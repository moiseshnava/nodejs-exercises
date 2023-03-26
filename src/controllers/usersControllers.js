const { default: axios } = require("axios");
const { sequelize } = require("sequelize");
const { User } = require("../db.js");

// los controladores con los que se usan en las bases de datos

// Users controllers

// create a new user
const createUser = async (name, email, phone) => {
   return await User.create({ name, email, phone });
}

// get user by id
const getUserById = async (id) => {
   const user = await User.findByPK(id);
   return user;
}

// get all users
const getAllUsers = async () => {
   try {
      const allUsers = await User.findAll();
      // if (!allUsers) {
      //    console.log("NO hay datos");
      //    return "No data"
      // }
      // console.log(allUsers);
      return allUsers;
   } catch (error) {
      return error
   }
}

// search users by name
const searchUserByName = async (name) => {
   const user = await User.findAll({
      where: {
         name: sequelize.where(
            sequelize.fn("LOWER", sequelize.col("name"), "LIKE", "%", name.toLowerCase() + "%")
         )
      }
   });
   return user;
}

// update user
const updateUser = async (id, newData) => {
   const data = await User.update(newData, {
      where: { id }
   });
   if (data[0] === 0) throw new Error("User not found");
   return "Data update successful";
}

// delete user
const deleteUser = async (id) => {
   const result = await User.destroy({
      where: { id }
   });
   if (result[0] === 0) throw new Error("User not found");
   return "Register delete successful";
}


module.exports = {
   createUser,
   getUserById,
   getAllUsers,
   searchUserByName,
   updateUser,
   deleteUser
}

