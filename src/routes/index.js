const { Router } = require("express");
const greetingRouter = require("../routes/greeteng");
const usersRouter = require("./usersRouter");


const mainRouter = Router();
mainRouter.get("/", (req, res) => {
   res.status(200).send("Hello World!");
})
// greetings router
mainRouter.use("/greeting", greetingRouter);

// user router:
mainRouter.use("/users", usersRouter);



module.exports = mainRouter;