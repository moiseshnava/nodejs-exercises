const {
   createUser,
   getUserById,
   updateUser,
   deleteUser,
   getAllUsers,
   searchUserByName,
} = require("../controllers/usersControllers");

// create user
const createUserHandler = async (req, res) => {
   const { name, email, phone } = req.body;
   if (!name || !email) throw new Error("Missing data");
   try {
      const user = await createUser(name, email, phone);
      res.status(201).json(user);
   } catch (error) {
      console.log(error.errors[0].message);
      res.status(400).json({ error: error });
   }
}

// get all users or get by name
const getUsersHandler = async (req, res) => {
   try {
      const { name } = req.query;
      const results = name ? await searchUserByName(name) : await getAllUsers();
      res.status(200).json(results);
   } catch (error) {
      res.status(400).json({ error: error });
   }
}

// get user by id
const getUserByIdHandler = async (req, res) => {
   try {
      const { id } = req.params;
      if (!id) throw new Error("Missing data");
      const user = await getUserById(id);
      res.status(200).json(user);
   } catch (error) {
      res.status(400).json({ error: error });
   }
}


// update user
const updateUserHandler = async (req, res) => {
   const { id } = req.params;
   const { name, email, phone } = req.body;
   try {
      if (!id) throw new Error("Missing data");
      let newData = { name, email, phone };
      const update = await updateUser(id, newData);
      
      res.status(201).json(update);
   } catch (error) {
      res.status(400).json({ error: error });
   }
}

// delete user

const deleteUserHandler = async (req, res) => {
   const { id } = req.params;
   if (!id) throw new Error("Missing data");
   try {
      const result = await deleteUser(id);
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json({ error: error });
   }
}
// CRUD HANDLERS
module.exports = {
   createUserHandler,
   getUsersHandler,
   getUserByIdHandler,
   updateUserHandler,
   deleteUserHandler,
}