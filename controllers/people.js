let {people}= require('../data')

const getPeople = (req,res)=>{
    console.log(req.body);
    
    res.status(200).json({success:true,data:people})
}

const createPerson=(req,res)=>{
    if (!name) {
         return res.status(201).json({success:false,msg:'please provide name value '})
    }
    res.status(201).json({success:true,person:name})
}

const createPersonPostman =(req,res)=>{
    const {name} = req.body
    if (!name) {
        return res
         .status(400)
         .json({success:false,msg:'please provide name vaalue'})
    }
    res.status(201).send({success:true,data:[...people]})
}

const updatePerson = (req,res)=>{
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
}

const deletePerson = (req,res)=>{
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
    }

module.exports ={ // i am just refreincing the name so no change in functionalty
 getPeople,
 createPerson,
 createPersonPostman,
 updatePerson,
 deletePerson
}