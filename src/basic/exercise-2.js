// Crea una aplicación Node.js que solicite al usuario su nombre y luego lo imprima en la consola.
const rl = require("../modules/readLine.js");

const greetings = async (msj) => {
   try {
      return new Promise((resolve) => {
         rl.question(`${msj} => `, (name) => {
            resolve(`Hola ${name}`);
         });
      });
   } catch (error) {
      return new Error(error);
   }
};

module.exports = greetings;

