// thIs method is for editing the data or update 

const express = require('express')
const app = express()
let {people} = require('../../data')

//static assets
app.use(express.static('./methods-public')) 
// parse form data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

app.post('/api/people',(req,res)=>{
    res.status(201).send('Success')
})// here i am adding the data

app.get('/api/people',(req,res)=>{
    console.log(req.body);
    
    res.status(200).json({success:true,data:people})
})

app.post('/api/people',(req,res)=>{
    if (!name) {
         return res.status(201).json({success:false,msg:'please provide name value '})
    }
    res.status(201).json({success:true,person:name})
})

app.post('api/postman/people',(req,res)=>{
    const {name} = req.body
    if (!name) {
        return res
         .status(400)
         .json({success:false,msg:'please provide name vaalue'})
    }
    res.status(201).send({success:true,data:[...people]})
})

app.post('/login',(req,res)=>{
    const {name} = req.body
    if (name) {
        return res.status(200).send(`welcosme ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id',(req,res)=>{
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

app.delete('api/people/id',(req,res)=>{
    //GET ID FROM URL
    const person = people.find((person)=>person.id === Number(req.params.id))


    //CHECK PERSON EXISTS
    if (!person) {
        return res
        .status(404)
        .json({successz:false,msg:`no person with ${req.params.id}`})
    }

    //REMOVE PERSON =>THIS IS THE MAIN DELETE LOGIC.filter() keeps only matching items
    const newPeople = people.filter(
        (person)=> person.id !==Number(req.params.id)
    )
    return res.status(200).json({success:true,data:newPeople })
    })


app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})

// summary id 1 is john and it is vanished 

/*
REMOVE PERSON
const newPeople = people.filter(
   (person)=> person.id !== Number(req.params.id)
)

THIS IS THE MAIN DELETE LOGIC.

filter() keeps only matching items.

Here:

person.id !== Number(req.params.id)

means:

Keep everyone EXCEPT that id

So if array was:

[
 {id:1,name:'john'},
 {id:2,name:'peter'}
]

and request is:

DELETE /api/people/1

new array becomes:

[
 {id:2,name:'peter'}
]

John vanished.

STEP 4 — SEND UPDATED ARRAY
return res.status(200).json({
   success:true,
   data:newPeople
})

Server sends remaining people back.
*/

/*
Frontend/Postman
      ↓
DELETE /api/people/1

      ↓

Express receives request

      ↓

req.params.id = 1

      ↓

find matching person

      ↓

filter out that person

      ↓

send remaining data back
 */

/*
specific item URL
+
remove matching item
=
delete data
*/