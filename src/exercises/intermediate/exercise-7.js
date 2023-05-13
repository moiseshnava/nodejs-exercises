// Crea una aplicación Node.js que utilice el módulo Cron para programar tareas periódicas.

// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *

const CronJob = require("cron").CronJob;

const job = new CronJob("*/5 * * * * *", ()=> {
   console.log("Esta tarea se ejecutara cada 5s");
});

const job2 = new CronJob("*/1 * * * *",()=>{
   console.log("Esta tarea se ejecutara cada 1 minuto");
});

const job3 = new CronJob("*/1 * * * * *", ()=> {
   console.log("Esta tarea se ejecutara cada 1s");
});


job.start();
job2.start();
job3.start();
