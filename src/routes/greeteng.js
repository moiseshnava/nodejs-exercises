const { Router } = require("express");

const greetingRouter = Router();

greetingRouter.get("/", async (req, res)=> {
   res.status(200).json({
      "greeting": "HELLO WORLD!"
   })
})


module.exports = greetingRouter;