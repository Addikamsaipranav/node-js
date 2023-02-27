const express = require("express")

const app=express()
app.use(express.json())

const courses =[
    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"},
    {id:4,name:"course4"}
]

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.delete('/api/courses/:id',(req,res)=>{
    const course =courses.find((c)=>{
        return c.id === parseInt(req.params.id)
    })
    if(!course){
        res.status(404).json("not present")
    }
    const index=courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)

    
})


const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`SERVER LISTENING AT PORT ${port}`)
})