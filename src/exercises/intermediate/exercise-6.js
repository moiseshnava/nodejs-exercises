// Crea una aplicación Node.js que utilice el módulo Cheerio para extraer información de una página web.

const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.youtube.com/";

request(url, (error, response, html) => {
   if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      // $('a').each((index, element) => {
      //    console.log($(element).attr('href'));
      // });
      $("input").each((index, element)=> {
         console.log($(element).attr("name"));
      })
   } else {
      console.error("Error loading");
   }
});




