// Crea una aplicación Node.js que permita al usuario ingresar dos números y luego imprima la suma en la consola;
const readline = require("readline");
const rl = require("../../modules/readLine");

const suma = async (msj) => {
   try {
      console.log(msj);

      return new Promise((resolve) => {
         rl.question(`Ingresa el valor de x: `, (xValue) => {
            rl.question(`Ingresa el valor de x: `, (yValue) => {
               let x = parseInt(xValue);
               let y = parseInt(yValue);
               if (isNaN(x) || isNaN(y)) {
                  resolve(`No se pueden sumar letras con numeros: ${xValue} + ${yValue}`);
               } else {
                  resolve(`El resultado de sumar ${x} + ${y} = ${xValue} + ${x + y}`);
               }
            })
         });
      });
   } catch (error) {
      return new Error(error);
   }
};

module.exports = suma;