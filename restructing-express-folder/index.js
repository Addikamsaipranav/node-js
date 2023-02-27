const express=require("express")
const Joi = require("joi")
const app=express()
const courses=require('./routes/courses')
const home = require('./routes/home')
app.use(express.json())




//routes

app.use('/api/courses',courses)
app.use('',home)


//process env port 
const port =process.env.PORT || 3000

app.listen(3000,()=>{
    console.log(`SERVER LISTENING AT THE PORT ${port}`)
})