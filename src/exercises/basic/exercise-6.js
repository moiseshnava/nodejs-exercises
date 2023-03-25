//6. Crea una aplicación Node.js que utilice el módulo HTTP para crear un servidor que responda con "Hola, mundo!".
const app = require("../../app");
const PORT = process.env.PORT || 3001;


let serverStarted = false;
let serverStatus;

const initServer = () => {
   serverStatus = app.listen(PORT, () => {
      // console.log(`Listen on port ${PORT}`);
      console.log("Hello world, server is already running...");
   });
   serverStarted = true;
}

const closeServer = () => {
   if (serverStarted) {
      // serverStatus.close((err) => {
      //    if (err) {
      //       console.log("Error closing server " + err.message);
      //       process.exit(1);
      //    } else {
      //       console.log("Server closed");
      //       process.exit(0);
      //    }
      // })
      serverStatus.close((err) => {
         if (err) {
            console.log("Error closing server " + err.message);
         } else {
            console.log("Server closed");
         }
      })

      serverStarted = false;
   } else {
      // console.log("Server is not running");
      return false;
   }
}

const server = (init) => {
   if (init) {
      if (serverStarted) {
         console.log("Server is already running...");
      } else {
         initServer();
      }
   } else {
      closeServer();
   }
}

module.exports = {
   server,
   initServer
}