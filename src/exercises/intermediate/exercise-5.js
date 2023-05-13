// Crea una aplicación Node.js que utilice el módulo Puppeteer para automatizar la interacción con un sitio web.
const puppeteer = require('puppeteer');

(
   async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   
   await page.goto('https://www.google.com');

   await page.waitForSelector('textarea[name="q"]');
   await page.type('textarea[name="q"]', 'Hello, World!');

   // Esperar a que aparezcan los botones de búsqueda
   await page.waitForSelector('input[name="btnK"]');

   // Hacer clic en el primer botón de búsqueda
   const searchButtons = await page.$$('input[name="btnK"]');
   await searchButtons[0].click();

   await page.waitForNavigation();

   const title = await page.title();
   console.log(title);

   await browser.close();
})();
