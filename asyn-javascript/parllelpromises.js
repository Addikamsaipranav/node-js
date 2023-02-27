const p1=new Promise((res,err)=>{
    setTimeout(()=>{
        console.log("ASyn operation 1 ....")
        err(new Error("err"))
    })
})

const p2=new Promise((res,err)=>{
    setTimeout(()=>{
        console.log("ASyn operation 2 ....")
        res(2)
    })
})

p1.then(r=>console.log(r)).catch(e=>console.log(e))
p2.then(r=>console.log(r)).catch(e=>console.log(e))

// to run promises result after compltes all p1,p2
Promise.all([p1,p2]).then(r=>console.log(r)).catch(e=>console.log(e))