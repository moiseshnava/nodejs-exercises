// Crea una aplicación Node.js que lea un archivo de texto y lo imprima en la consola.
const fs = require("fs");
const path = require("path");
const rl = require("../../modules/readLine");


const readFile = (file) => {
   try {
      const filePath = path.join(__dirname, '..', file);
      const res = fs.readFileSync(filePath, 'utf8', (err, data) => {
         if (err) throw err;
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

