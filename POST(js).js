// we are gonna use here full js only , here see in index.html we dont have the action and method

// axios => makes easier to setup http methods; so intead of using built in fetch i could use axios


// then theres a setup of axios in cdn library in frontent prt in javascript.html => starting 5 min only this javascript.html was xplained core axios concept
const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public')) 
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
now if you want to do a bit of console logging your'e welecome to do that on frontend if for example you are iffy about syntax but axios there so when we perform a http request with axios we actually getting back a giant object and in that is a data property so that response is coming back from the server and in there you can see i set up a heading 5 with data.person so thats the person that we're sending back from our side from our server now if for ex:- there is an error we go with erroe response again data property bcz theres the useful data sits bcz the object is giant with lots of useful info as far as we are sending back we are sending back in the data and then messages now i'm looking for message property bcz i setup a message property on server 
*/


/*
now lets try it out so i am gonna send this one so i sent again here nothing chaged but if i take a look at my network tab i should see a api people adnd 201 so thats the response that i am getting on my frint end so lets braverly click on this one and we can see that the request url is api peopel okay the method was post now the eesponse was 201 so it was succesfully created now check out when we look at the request method we have application json do on our front end we do need to add this conetnt type when we are sending the data alos axios adds for us but in genral we have request payload pending and the name is equal to susan that when we add line 16 even we are handling form submitting we are nit handling json data so yes we kniw how to send json data but we're not handling the incoming json data 
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

// STILL REMAINED 
