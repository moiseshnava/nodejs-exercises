const { Router } = require("express");
const greetingRouter = require("../routes/greeteng");


const mainRouter = Router();
mainRouter.get("/", (req, res)=> {
   res.status(200).send("Hello World!");
})
mainRouter.use("/greeting", greetingRouter);

module.exports = mainRouter;