const express = require("express")

const app =express()

app.use(express.json())

//custom middle ware 
app.use(function(req,res,next){
    console.log("Logging....")
    next()
})
app.use(function(req,res,next){
    console.log("authenticatingggg....")
    next()
})
console.log(process)
const courses=[
    {id:1,name:"pranav"},
    {id:2,name:"keerthana"}
]

app.get("/courses",(req,res)=>{
    res.send(courses)
})

app.listen(3000,()=>{
    console.log("Server running at port 3000")
})