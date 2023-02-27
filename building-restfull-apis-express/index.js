const express=require("express")

//express is a function

// so add this function to an object 

const app=express()

// app is an object 
// app has get,post,delete,put methods in it 

const courses =[
    {id:1,name:"course1"},
    {id:1,name:"course2"},
    {id:1,name:"course3"},
    {id:1,name:"course4"}
]

//GET METHOD
app.get("/",(req,res)=>{
    res.send("HEllo world !")
})

app.get("/api/courses",(req,res)=>{
    res.send({
        id:1,
        coursename:'pythonmmmm'
    },
    )
})

// app.get("/api/courses/:id",(req,res)=>{
//     res.send(req.params.id)
// })

app.get("/api/posts/:year/:month",(req,res)=>{
    res.send(req.params)
})

app.get("/api/posts/:names",(req,res)=>{
    res.send(req.query)
})






const port =process.env.PORT || 3000

app.listen(3000,()=>{
    console.log(`SERVER LISTENING AT THE PORT ${port}`)
})