// details for operating system

var os = require('os')

console.log(os.type()); // windows
console.log(os.arch()); // bit
console.log(os.release()); // release
console.log(os.version()); // windows 10
console.log(os.uptime()); // time
console.log(os.userInfo()); // userInfo
console.log(os.totalmem()); // ram
console.log(os.freemem()); // ram
console.log(os.cpus()); // cpu
console.log(os.networkInterfaces()); // net work