// 5. Crea una aplicación Node.js que lea un archivo de texto y lo escriba en otro archivo.
const rl = require("../../modules/readLine");
const fs = require("fs");
const path = require("path");



const copyFile = async (file, destination) => {
   try {
      const filePath = path.join(__dirname, '..', file);
      const destinationPath = path.join(__dirname, '..', destination);

      let data = fs.readFileSync(filePath, 'utf8', (err, data) => {
         if (err) throw err;
      });

      fs.writeFileSync(destinationPath + "newFile.txt", data);
      console.log("New File Created.");
   } catch (error) {
      console.log(error)
   }
}

module.exports = copyFile
