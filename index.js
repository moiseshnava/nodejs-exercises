const readFile = require("./src/basic/exercise-3");
const suma = require("./src/basic/exercise-4");
const helloWorld = require("./src/basic/exercise-1");
const greeting = require("./src/basic/exercise-2");
const rl = require("./src/modules/readLine");
const copyFile = require("./src/basic/exercise-5");
const txtFile = "./src/data/fileDemo.txt";
const txtEmpty= "./src/data/empty.txt";

const menu = `
 ===================================================
|            "EJERCISION DE NODEJS"                 |
 ===================================================
|BIENBENID@ POR FAVOR SELECCIONA UN OPCION DEL MENU.|
|___________________________________________________|
|NIVEL BASICO:                                      |
|1.-HELLO WORLD.                                    |
|2. GREETING.                                       |
|3. READ FILE TXT.                                  |
|4. SUM TWO NUMBERS.                                |
|5. COPY FILE CONTENT TO OTHER FILE                 |
|___________________________________________________|

>>> `;

const fnMenuOp = async (op) => {
   switch (op) {
      case "1":
         helloWorld();
         return true;
      case "2":
         const res = await greeting("¿Cual es tu nombre?");
         console.log(res);
         return true;
      case "3":
         readFile(txtFile);
         return true;
      case "4":
         let sumRes = await suma("Ingresa dos numeros: ");
         console.log(sumRes);
         return true;
         case "5":
            copyFile(txtFile, txtEmpty);
            return true;
      case "exit":
         rl.close();
         return false
      default:
         console.log(`Error: ${op} no es una opcion valida.`);
         return true;
   }
}

const fnMenuController = () => {
   rl.question(menu, async (op) => {
      const showMenu = await fnMenuOp(op);
      showMenu && fnMenuController();

   });
}

// const fnMenuOp = (op) => {
//    switch (op) {
//       case "1":
//          helloWorld();
//          return true;
//       case "2":
//          const res = greeting("¿Cual es tu nombre?");
//          console.log(res);
//          return true;
//       case "3":
//          const resTxt = readFile(txtFile);
//          console.log(resTxt);
//          return true;
//       case "exit":
//          rl.close();
//          return false
//       default:
//          console.log(`Error: ${op} no es una opcion valida.`);
//          return true;
//    }
// }
// const fnMenuController = () => {
//    rl.question(menu, (op) => {
//       const showMenu = fnMenuOp(op);
//       showMenu && fnMenuController();
//    });
// }
(() => {
   fnMenuController();
})();




