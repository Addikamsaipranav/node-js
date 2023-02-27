const os=require('os')

var totalmemory=os.totalmem();
var freeMemory=os.freemem();

console.log(`total memory : ${totalmemory}`);

console.log("Free MEMORY ",freeMemory)
//es6 -> ECMA SCRIPT 6