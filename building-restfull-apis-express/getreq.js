const express=require("express")

const app=express()

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
app.get("/api/courses/:id",(req,res)=>{
    const course =courses.find((c)=>{
        return c.id === parseInt(req.params.id)
    })
    if(!course){
        res.status(404).json("not present")
    }
    res.send(course)
})



const port =process.env.PORT || 3000

app.listen(3000,()=>{
    console.log(`SERVER LISTENING AT THE PORT ${port}`)
})