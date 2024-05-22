const { log } = require('console');
const os = require('os');

const osInfo = {
    type: os.type(),
    uptime: os.uptime(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(osInfo);