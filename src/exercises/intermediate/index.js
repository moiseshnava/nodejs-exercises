const app = require("../../app");
const { sequelize } = require("../../db");

app.listen(3001, () => {
   console.log("Listen on port 3001");
   sequelize.sync({
      force: true,
   })
});

