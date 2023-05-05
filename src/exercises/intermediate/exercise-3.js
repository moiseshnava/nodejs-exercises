// 3. Crea una aplicación Node.js que utilice el módulo NodeMailer para enviar correos electrónicos.
// instalacion 
// npm install nodemailer

// importamos el modulo
const nodemailer = require("nodemailer");
require("dotenv").config();

const {
   EMAIL_USER,
   EMAIL_PASSWORD
} = process.env;



// configuracion del transporte

let transporter = nodemailer.createTransport({
   // seleccionamos el tipo de servicio
   service: "gmail",
   // authenticacion
   auth: {
      // correo
      user: EMAIL_USER,
      // contasena
      pass: EMAIL_PASSWORD
   }
});


let mailOptions = {
   from: EMAIL_USER,
   to: "moises92navapagos@gmail.com",
   subject: "ASUNTO DE PRUEBA",
   text: "Esto solo una prueba"
}

transporter.sendMail(mailOptions, (error, info) => {
   
   if (error) {
      console.log(error);
   } else {
      console.log("correo enviado" + info)
   }
})



