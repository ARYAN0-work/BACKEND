// thIs method is for editing the data or update 

const express = require('express')
const app = express()
let {people} = require('./data')

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

/*
in our case what is url for whole list bcz that is the api people so this was just for testing correct and then we go with api forward slash and then we go woth people and then of course i also want to add that id so this is going to get me that one specfic item and again the why were doing that bcz when we'll send our put or delete request we'll send specfic path so this is going to be that one item and if that item exists then in the body theres going to be data to update or in thus case of delete theres goung to be nothing in the body we'll just remove that item and you'll see how it works in a sec 
*/

/*now remeber we have route params in this case i'm not going to call this person id i'm just going to say id just rember that we can call it technically whatever we would want and now in that case thateres two things i am looking for first i want ti get the value here in the params and rember we access that using the rec params and the second thing when it comes to update when it comes to the put request i'm also going to send something in the body why well bcz if i'm updating for example if i'm changing the name from peter to susan or whatever of course
 */

/*
also theres two side of this request not only we're looking for that specfic item why we use the params thats why i specfically say hey i would like to get the no. one or no. 2 i also need to supply this value bcz othereiise whats the point of updating something so lets access both 0f those things lets say that i'm gonna get that id from rec params so this is going to tell me which item the second thing since if course u want to update the item that value as well correct then const blah blah blah and the two values that we're gonna get from our question and just to make things intresting i will console log them right now so i'm gonna go back to postman and rember we need to change the url its not gonna be postman in this case it is going to be people and now you can select people and now you can select any of the ids whether then the rest is basic debugging 
*/

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const name = people.find((person)=>person.id === Number(id))

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

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})


// summary => on postman you will see now for id 1 and 2 the name is peter the 1st one name john is replaced 