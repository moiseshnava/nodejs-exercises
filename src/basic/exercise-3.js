// Crea una aplicación Node.js que lea un archivo de texto y lo imprima en la consola.
const fs = require("fs");
const rl = require("../modules/readLine");


const readFile = (file) => {
   try {
      const res = fs.readFileSync(file, 'utf8', async (err, data) => {
         if (err) throw err;
         return data
      });
      console.log(`
   El contenido del archivo es:
   
      `)
      console.log(res);

   } catch (error) {
      return new Error(error);
   }
}

module.exports = readFile;

