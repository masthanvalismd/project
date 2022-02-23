const os = require("os");
console.log("os version",os.version())
console.log("Free mem",os.freemem())
console.log("Total mem",os.totalmem())
console.log("Free mem in %", ((os.freemem() / os.totalmem()) * 100).toFixed(2))
console.log("cpus",os.cpus())