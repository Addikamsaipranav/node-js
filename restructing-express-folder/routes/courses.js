const express=require("express")

const router=express.Router();

const courses =[
    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"},
    {id:4,name:"course4"}
]

router.get("/",(req,res)=>{
    res.send(courses)
})

//handling http get req for a particular user
router.get("/:id",(req,res)=>{
    const course =courses.find((c)=>{
        return c.id === parseInt(req.params.id)
    })
    if(!course){
        res.status(404).json("not present")
    }
    res.send(course)
})

router.post("/",(req,res)=>{
    
    // to use the joi , lets create a schema means the structure of our obj and compare with the req.body
    // for resubality i have defined the joi validation in a function 
    const result=validateCourse(req.body)
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
//handling http get req for a particular user
router.put("/:id",(req,res)=>{

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

router.delete('/:id',(req,res)=>{
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


function validateCourse(course){

    const schema={
        name:Joi.string().min(3).required()
    }

    return Joi.validate(course,schema)
}

module.exports = router