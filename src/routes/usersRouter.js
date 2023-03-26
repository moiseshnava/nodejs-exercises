const { Router } = require("express");
const {
   createUserHandler,
   getUserByIdHandler,
   getUsersHandler,
   updateUserHandler,
   deleteUserHandler
} = require("../handlers/usersHandlers");

const usersRouter = Router();

// middleware for users
const validate = (req, res, next) => {
   const { name, email } = req.body;
   if (!name) return res.status(400).json({ error: "Missing name" });
   if (!email) return res.status(400).json({ error: "Missing email" });
   next();
}

// create user
usersRouter.post("/", validate, createUserHandler);

// get users
usersRouter.get("/", getUsersHandler);


module.exports = usersRouter;
