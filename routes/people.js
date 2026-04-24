// so this is going to be router instance that takes care of the routing app and we explicitly get the router from the express so this is going to be a router instance takes care of the routing instead of the app se're not going yo do routing anymore in our app.js

const express = require('express')
const router = express.Router()

let {people}= require('../data')

// we made a base so now we just have to write a simple diffrent thing every time

router.get('/',(req,res)=>{
    console.log(req.body);
    
    res.status(200).json({success:true,data:people})
})

router.post('/',(req,res)=>{
    if (!name) {
         return res.status(201).json({success:false,msg:'please provide name value '})
    }
    res.status(201).json({success:true,person:name})
})

router.post('api/postman/people',(req,res)=>{
    const {name} = req.body
    if (!name) {
        return res
         .status(400)
         .json({success:false,msg:'please provide name vaalue'})
    }
    res.status(201).send({success:true,data:[...people]})
})

router.put(':id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person)=>person.id === Number(id))

    if (!person) {
        return res
        .status(404)
        .json({successz:false,msg:`no person with ${id}`})
    }
    const newPeople =people.map((person)=>{
        if (person.id === Number(id)){
            person.name =name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople})
})
router.delete('api/people/id',(req,res)=>{
    const person = people.find((person)=>person.id === Number(req.params.id))

    if (!person) {
        return res
        .status(404)
        .json({successz:false,msg:`no person with ${req.params.id}`})
    }
    const newPeople = people.filter(
        (person)=> person.id !==Number(req.params.id)
    )
    return res.status(200).json({success:true,data:newPeople })
    })

module.exports = router


// for taking care of this we have controllers