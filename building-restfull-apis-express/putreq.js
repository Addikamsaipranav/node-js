const express=require("express")
const Joi = require("joi")
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

//handling http get req for a particular user
app.put("/api/courses/:id",(req,res)=>{

    // looking for the id
    const course =courses.find((c)=>{
        return c.id === parseInt(req.params.id)
    })
    // if not present return error
    if(!course){
        return res.status(404).json("not present")
    }    

    const result=validateCourse(req.body)
    if(result.error){
        return res.status(400).send(result.error.details[0].message)
        
    }
    //updating
    const index=courses.indexOf(course)
    res.send(course)
    courses[index].name=req.body.name
    console.log(courses[index])

    //u can also update using this 
    //course.name=req.body.name
})


function validateCourse(course){

    const schema={
        name:Joi.string().min(3).required()
    }

    return Joi.validate(course,schema)
}

const port =process.env.PORT || 3000

app.listen(3000,()=>{
    console.log(`SERVER LISTENING AT THE PORT ${port}`)
})