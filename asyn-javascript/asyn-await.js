async function displayCommits(){
     const user = await getUser(1)
     console.log(user)
     const repositories= await getRepositories(user.gitHubName)
     console.log(repositories)
     const commits = await  getCommits(repositories[0])
     console.log(commits)
}
displayCommits()

function getUser(id){
    return new Promise((res,err)=>{
        setTimeout(()=>{
            console.log("Reading user from data base ....")
            res({id:id,githubname:"Addikamsaipranav"})
        })
    })
}

function getRepositories(gitHubName){
    return new Promise((res,err)=>{
        setTimeout(()=>{
            console.log("Reading Github API ....")
            res(["repo1","repo2","repo3"])
        })
    })
}

function getCommits(repo){
    return new Promise((res,err)=>{
        setTimeout(()=>{
            console.log("Reading user from data base ....")
            res(['commit-1'])
        })
    })
}