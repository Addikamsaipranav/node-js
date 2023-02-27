console.log("before")
const user=getUser(1)

console.log(user)

console.log("AFTER")

function getUser(id){
    setTimeout(()=>{
        console.log("Reading user from data base")
        return {id:id,gitHub:'pranavaddikam'}
    },2000)
}





//output
/*
before 
undefined
After
Reading user from database

explanation : Because it will first log before ,
next it will go to execute function getUser , there actually its a settimeOut() therefore it goes to next line
at that instace settimeout() doesnt execute so nothing is returned and user is undefined
therefore it will prints undefined
then it prints after 
and then after 2sec executes setTimeout() 
prints "READing a user from the database "
*/


// to get an output we have 3 patterns in asyn 
//callbacks
//promises
//asyn await




