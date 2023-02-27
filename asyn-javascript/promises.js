const p =  new Promise((res,err)=>{
    setTimeout(()=>{
        res({id:1,name:"resultObj"});
        err(new Error("error message"))
    },2000)
})

// p is an obj which holds either response or error , 
// we can use p object and the assig the value as data to have an object name and then access the data fom p object 
p.then(data=>{
    console.log(data)
}).catch(e=>console.log(e))

// if there is no response only error is there , then it will give catch as error and logs it 




//rewriting it with promises
console.log("before")
getUser(1).then(user=>getRepositories(user.gitHubName))
           .then(ress=>getCommits(ress[0]))
           .then(res=>console.log(res))

/*here we are consuming promises 
// lets first id from getuser(1)
// id 1 has been pass to it 
id 1 is been consumed and promise holds a then with user object 
*/


console.log("AFTER")

function getUser(id){
   return new Promise((res,err)=>{
    setTimeout(()=>{
        console.log("Reading user from data base")
        res( {id:id,gitHubName:'pranavaddikam'})
    },2000)
   })
    
}

function getRepositories(username){
    return new Promise((res,err)=>{
        setTimeout(()=>{
            console.log("calling ",username,"repositories")
            res(['repos1','repos2','repos3'])
         },2000) 
    }) 
}

function getCommits(repo){
    return new Promise((res,err)=>{
        setTimeout(()=>{
            console.log("getting commits")
            res(['commits-1'])
        })
    })
}