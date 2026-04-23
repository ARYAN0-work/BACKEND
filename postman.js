// now we kow to method fr post request

// if we need to create a frontend to test something for every rute as you can see i mean our devlopment gonna be extremly sllow => use postman for testing apis

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

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})


