const express=require('express')
const router=express.Router();
const sampleTableSchemaCopy=require('../Model/SignupModel')
 
 router.post("/signup", (request,response)=>
{
    const sam =new sampleTableSchemaCopy({
        name:request.body.name,
        age:request.body.age,
        gender:request.body.gender,
        email:request.body.email,
        contact:request.body.contact,
        Address:request.body.Address,
    })

    sam.save().then(data=>
    {
        response.json(data);
        console.log("Data added sucessfully");

    }).catch(error=>
    {
        response.json(error)
    }
    )
})
module.exports = router;


