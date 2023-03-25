// 7. Crea una aplicación Node.js que utilice el módulo FS para crear un archivo de texto y escribir en él.
const fs = require("fs");
const rl2 = require("../../modules/readLine");
const destination = "./src/data/";

const createTitle = async () => {
   try {
      return new Promise((resolve) => {
         rl2.question(`Escribe el titulo para el archivo txt >> `, (input) => {
            resolve(input);
         });
      });
   } catch (error) {
      return new Error();
   }
}
const createContent = async () => {
   try {
      return new Promise((resolve) => {
         rl2.question(`Escribe el texto >> `, (input) => {
            resolve(input);
         });
      });
   } catch (error) {
      return new Error();
   }
}

const generateTxt = async () => {
   try {
      let title = await createTitle();
      let content = await createContent();
      let contentEncode = Buffer.from(content, 'utf8').toString('utf8');
      return new Promise((resolve, reject) => {
         if (title && content) {
            fs.writeFile(`${destination}${title}.txt`, contentEncode, (err) => {
               if (err) {
                  reject(err)
               } else {
                  console.log('New file created');
                  resolve();
               }
            })
         }
      })
   } catch (error) {
      return new Error();
   }
}

module.exports = generateTxt;

