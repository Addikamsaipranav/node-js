console.log("Before")
console.log("After")
// this is an exmple of synchronous operation and it executes line by line 

//asyn operation example
console.log("ASYNCHRONOUS EXAMPLE")
console.log("1")
setTimeout(()=>{
   console.log("PRINTS AFTER 2 sec")
},2000)
console.log("2")

//asyn opration is done by single thread itself , no multi thread is involved in this javascript