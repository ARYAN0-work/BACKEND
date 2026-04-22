// here we are gonna create info for each and evrey tag => url path
const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public')) // IN ORDER TO GET THE FORM DATA WE NEED TO GO WITH CODED MIDDLEWARE 

// SO I'LL ADD HERE PARSE FORM DATA
app.use(express.urlencoded({extended: false}))// BUILT IN MIDDLEWARE FN => IT PARSES INCOMING REQUEST WITH URL AND CODED PLAYLOAD AND IT IS BASED ON THE BODY PARSER we are talking aboit thre flag

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

// 7:03 ->7:05 => so 1st flavour:- so this is post request form and this is just front end where we come up with an action and since this index.html is on the same server we simply go with forward sladh and login of coure if you front end application is seprate from you server then you're going to provide a full path where the server is hosted so basically a full domain and then we go with method post now this a techinically a front-end part but it is crucial that we undersatnd it so then we perform of course a post request we hit our url so int this case we hit our forward slash login and this is part where we handle that on server in order to get that data whatever we are being sent we need to use a middleware this one is built into express so again we simply just need to use app.use which is going to apply middleware to all our incoming request and then we just pass an extended false flag and the moment we do that indirect.body will have access to our form values so whatever is set-up as a value that is going to be our key and whatever is passed into our form 



// WE HAVE TWO PROB WE ARE NOT HANDLLING THAT AND WE DONT HAVW THE MIDDLEWARE FOR THE FILE

//<form action="/login" method="POST"> in this line the method is post and we are sending it on login 

// do one thing when you make the page go inspect see network and other iptions aldo deep dive you will see headers preview response intaitatior timing cookies 

//when you enter on the page  you wikl get cannot post/login and you will gi inspect and network we know that thwere is no roite that handles the post for login but whats really intresting here is in the mnetwork tab of cours i can see my request in case this is login now this is 404 and again im going to repaet this 20,000 times but check out teh method is not get method  is not get method is post and then we are going to localhosy 5000 and then forward slasj login njow whats also really intresting the way in h+the bootom you see forum data then we have key pair value pair  we have name and johna nd if you remeber we talje about http message  that body is opyional so for example when we're sending a get request we're not sending a body but we're sending a post request its very crucial so if i want to add something onto the server of cours i want to get data i mean otherwise how i'm going to know where to add to server doesnt that make sense