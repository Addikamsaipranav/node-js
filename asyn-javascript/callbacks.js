console.log("before")
getUser(1,function callabck(user){
    //here we pass id with a function defination ,
    // but we call this callback function in settimout of getuser() , so we get the user json object and its gets passed ou=ver here after 2 sec 
    // thus we get this user object after 2 sec  
    console.log('user',user)
    getRepositories(user.gitHubName,function callabck(res){
        console.log("REPOS",res)
    })
})



console.log("AFTER")

function getUser(id,callabck){
    //x is a function we will call this function after setTimeout() executed
    setTimeout(()=>{
        console.log("Reading user from data base")
        callabck( {id:id,gitHubName:'pranavaddikam'})
    },2000)
}

function getRepositories(username,callabck){
  setTimeout(()=>{
     console.log("calling ",username,"repositories")
     callabck(['repos1','repos2','repos3'])
  },2000)  
}