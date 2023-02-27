async function fetchData(){
    try{
        const res=await fetch('http://localhost:3000/api/courses')
    if(!res.ok){
        throw new Error(`failed to fetch post:${res.status}`)
    }
    return res.json();
    }
    catch(e){
        console.log(e)
    }
   
}

async function list(postContainerID){
   const postElement = document.getElementById(postContainerID)
   if(!postElement){
    return ;
   }
   else{
     
   }
}