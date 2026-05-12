// here we are gonna create info for each and evrey tag => url path
const express = require('express')
const app = express()
let {people} = require('../../data')

app.use(express.static('./methods-public')) // IN ORDER TO GET THE FORM DATA WE NEED TO GO WITH CODED MIDDLEWARE 

// SO I'LL ADD HERE PARSE FORM DATA
app.use(express.urlencoded({extended: false}))// BUILT IN MIDDLEWARE FN => IT PARSES INCOMING REQUEST WITH URL AND CODED PLAYLOAD AND IT IS BASED ON THE BODY PARSER we are talking about thre flag

app.get('/api/people',(req,res)=>{
    console.log(req.body);
    
    res.status(200).json({success:true,data:people})
})

//Route
app.post('/api/people',(req,res)=>{
    // now if the form is filed and if setup empty
    if (name) {
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})

/*
HTML Form
↓
POST request
↓
express.urlencoded()
↓
req.body
↓
server uses data
*/

// WE HAVE TWO PROB WE ARE NOT HANDLLING THAT AND WE DONT HAVe THE MIDDLEWARE FOR THE FILE

// do one thing when you make the page go inspect see network and other options also deep dive you will see headers preview response intaitatior timing cookies 

/*
Short version:


When form submits to:


/login
but server has NO:
app.post('/login')
route, Express returns:
Cannot POST /login
(404 error)

But in browser DevTools → Network tab, we can still see:


request method = POST


URL = /login


form data sent


Example:
name : john
This is request BODY data.

Important concept:
GET requests usually do NOT send body.
POST requests usually DO send body because they send data to server.
Example:


create user


login


add product


submit form


Server needs data, otherwise it doesn't know WHAT to create/add/login.
That’s why POST + req.body are important.
*/