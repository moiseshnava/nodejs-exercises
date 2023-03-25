// 10. Crea una aplicación Node.js que utilice el módulo OS para obtener información del sistema operativo.

const os = require("os");



const osData = () => {
   let infoSystem = {
      SO: os.type(),
      platform: os.platform(),
      architecture: os.arch(),
      rootPath: os.homedir(),
      cpus: os.cpus().length,
      hostName: os.hostname(),
   }
   console.log(`
   OPERATING SYSTEM INFO:
      SO: ${infoSystem.SO}
      platform: ${infoSystem.platform}
      architecture:${infoSystem.architecture}
      rootPath: ${infoSystem.rootPath}
      cpus: ${infoSystem.cpus}
      hostName:${infoSystem.hostName}
   `);
}

module.exports = osData