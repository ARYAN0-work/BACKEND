// we are gonna use here full js only , here see in index.html we dont have the action and method

// axios => makes easier to setup http methods; so intead of using built in fetch i could use axios

const express = require('express')
const app = express()
let {people} = require('../../data')

//static assets
app.use(express.static('./methods-public')) // app.use is used to add middleware to our file
// parse form data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())// now we have access => now we can setup more logic

// just bcz the url is same doent mean the methods is going to be same 

app.post('/api/people',(req,res)=>{
    res.status(201).send('Success')
})// here i am adding the data

app.get('/api/people',(req,res)=>{
    console.log(req.body);
    
    res.status(200).json({success:true,data:people})
})

app.post('/api/people',(req,res)=>{// if user tries to submit without any values then we theres going to be a error message so in the api people in the post method  lets setup our logic
    if (!name) {
         return res.status(201).json({success:false,msg:'please provide name value '})
    }
    res.status(201).json({success:true,person:name})
})// now it will simply add it to the list 

/*
When frontend sends a request using Axios, Axios returns a very large response object containing lots of information like headers, status code, config, and actual server data. The important part for us is usually the data property because that contains the useful response sent by our Express server. So if server sends back something like person:name, frontend can access it using response.data.person and display it in the UI, like inside an <h5> tag. Similarly, if there is an error, server may send a message property like msg:'please provide name value', and frontend can read it using error.response.data.msg. So overall, Axios response object is huge, but most of the time we mainly work with response.data because that contains the actual useful information returned from the backend.
*/

//Route
app.post('/login',(req,res)=>{// here i am just reading data
    // now if the form is filed and if setup empty
    const {name} = req.body
    if (name) {
        return res.status(200).send(`welcosme ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})
