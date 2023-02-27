const fs = require('fs')

// in fs module there will be both synchronous and asynchrounous methods but always use asyn operations 

const files = fs.readdirSync("./")

// // this sync method will give us back an array of file names prresent in that current folder
console.log(files);

// lets use asyn method but it will give 2 parameters 
// one is directory and a call back

// lets see the implementation of asyn behavarior of read dire
fs.readdir("./",(err,file)=>{
    if(err){
        console.log("ERRORRRRR")
    }
    else{
        console.log("RESULT IS ",file)
    }
 })
