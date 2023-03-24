const readFile = require("./src/basic/exercise-3");
const suma = require("./src/basic/exercise-4");
const helloWorld = require("./src/basic/exercise-1");
const greeting = require("./src/basic/exercise-2");
const rl = require("./src/modules/readLine");
const copyFile = require("./src/basic/exercise-5");
const { server, initServer } = require("./src/basic/exercise-6");
const pathInfo = require("./src/basic/exercise-8");
const event = require("./src/basic/exercise-9");
const EventEmitter = require("events");
const osData = require("./src/basic/exercise-10");
const generateTxt = require("./src/basic/exercise-7");
const emitter = new EventEmitter();

const txtFile = "./src/data/fileDemo.txt";
const txtEmpty = "./src/data/";

const menu = `
 ===================================================
|            "EJERCISION DE NODEJS"                 |
 ===================================================
|BIENBENID@ POR FAVOR SELECCIONA UN OPCION DEL MENU.|
|___________________________________________________|
|HELPS:                                             |
|CLOSE SERVER WRITE: "close server"                 |
|NIVEL BASICO:                                      |
|1.-HELLO WORLD.                                    |
|2. GREETING.                                       |
|3. READ FILE TXT.                                  |
|4. SUM TWO NUMBERS.                                |
|5. COPY FILE CONTENT TO OTHER FILE                 |
|6. INIT A SERVER                                   |
|7. CREATE AND WRITE IN ARCHIVE TXT                 |
|8. PATH INFO                                       |
|9. CREATE EVENT                                    |
|10. SO INFO                                        |
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
      case "6":
         server(true);
         return true;
      case "7":
         await generateTxt();
         return true
      case "8":
         pathInfo(txtFile);
         return true
      case "9":
         const eventName = await event();
         if (eventName) {
            emitter.emit(eventName);
         }
         return true;
      case "10":
         osData();
         return true;
      case "close server":
         server(false);
         return true;
      case "exit":
         server(false);
         server(false);
         rl.close();
         console.log("BYE :)");
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

(() => {
   fnMenuController();
})();





