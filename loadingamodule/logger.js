const x=require("./third");
function log(message){
    console.log(message);
}
function two(m){
    console.log("two"+m);
}

console.log(x());
module.exports=two;
module.exports.log=log;