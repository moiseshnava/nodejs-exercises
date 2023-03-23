// 5. Crea una aplicación Node.js que lea un archivo de texto y lo escriba en otro archivo.
const rl = require("../modules/readLine");
const fs = require("fs");
const txtFile = "./src/data/fileDemo.txt";
const txtEmpty = "./src/data";

const copyFile = async (file, destination) => {
   try {
      let data = fs.readFileSync(file, 'utf8');
      fs.writeFileSync(destination + "newFile.txt", data);
      console.log("New File Created.");
   } catch (error) {
      console.log(error)
   }
}

module.exports = copyFile
