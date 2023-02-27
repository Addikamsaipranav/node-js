const express=require("express")
var morgan = require('morgan')

const app=express()

app.set('view engine','pug')
app.set('views','./views') // default


process.env.NODE_ENV = 'production';
const courses =[
    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"},
    {id:4,name:"course4"}
]


//get the exact environment now
//environments are of different types 
//development,production ,testing,stagging,deployed


console.log(process.env.NODE_ENV) // if its not set it will be set by default undefined
console.log(app.get('env'))// but here by defualt its development

//lets set the environment == development use morgon or else not 


if(app.get('env')==='development'){
    app.use(morgan('tiny'))
    console.log("morgan enabled")
}
//lets set NODE_ENV to production 
// in cmd -> set NODE_ENV=production
app.get("/api/courses",(req,res)=>{
    res.send(courses)
})



const port =process.env.PORT || 3000

app.listen(3000,()=>{
    console.log(`SERVER LISTENING AT THE PORT ${port}`)
})