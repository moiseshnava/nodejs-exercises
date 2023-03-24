// 9. Crea una aplicación Node.js que utilice el módulo Events para crear un evento personalizado y emitirlo.

const { EventEmitter } = require("stream");
const rl = require("../modules/readLine");

const event = () => {
   return new Promise((resolve) => {
      rl.question(`Ingresa el nombre del evento o "exit" para terminar: `, (eventName) => {
         if (eventName === "exit") {
            console.log("Saliendo de ejercicio 8...");
            resolve(null);
         } else {
            console.log(`Se ha creado el evento ${eventName}`);
            resolve(eventName);
         }
      });
   });
};

module.exports = event;