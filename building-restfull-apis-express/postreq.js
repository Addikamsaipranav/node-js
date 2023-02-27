const express=require("express")
const Joi = require('joi')
const app=express()
app.use(express.json())
const courses =[
    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"},
    {id:4,name:"course4"}
]

app.get("/api/courses",(req,res)=>{
    res.send(courses)
})

app.post("/api/course",(req,res)=>{
    
    // to use the joi , lets create a schema means the structure of our obj and compare with the req.body
    // for resubality i have defined the joi validation in a function 
    const result=validateData(req.body)
    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return
    }
    
    const course={
        id : courses.length + 1,
        name:req.body.name
    }
    courses.push(course)
    res.send(course)
    
})


function validateData(x){
   const schema={
    name:Joi.string().min(3).required()
   }
   return Joi.validate(x,schema)
}

const port =process.env.PORT || 3000

app.listen(3000,()=>{
    console.log(`SERVER LISTENING AT THE PORT ${port}`)
})