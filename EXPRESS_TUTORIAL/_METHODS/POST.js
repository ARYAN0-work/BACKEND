// we can insert data on server but its not like we can configure browser and start making post request unforunatly thats not how it works thats why i provided a little bit of help now keep in mind one thing where after we set up a post method effectivly once we take a look at twoo flavours of how we can set up post request we will install one more tool which is going to be crucial o]in our express server devlopment which is just going to allow us to test everything much faster but since for post i do wnat to show you two flavours that we will use static data meaning theres an app i prepared  

const express = require('express')
const app = express()
let {people} = require('../../data')

//static assets
app.use(express.static('./methods-public')) 
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})

// HERE

//Now Express acts as BOTH:

//backend API
//frontend file server

/*
frontend files served
↓
frontend requests API
↓
server responds with JSON
↓
later frontend will POST data back
*/