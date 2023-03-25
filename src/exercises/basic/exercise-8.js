// Crea una aplicación Node.js que utilice el módulo Path para obtener información sobre la ruta de un archivo.

const path = require("path");

const pathInfo = (route) => {
   try {
      let res = path.parse(route);
      console.log(res);
   } catch (error) {
      console.log(error.message);
   }
}


module.exports = pathInfo;



