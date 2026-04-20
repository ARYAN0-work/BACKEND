// we can insert data on server but its not like we can configure browser and start making post request unforunatly thats not how it works thats why i provided a little bit of help now keep in mind one thing where after we set up a post method effectivly once we take a look at twoo flavours of how we can set up post request we will install one more tool which is going to be crucial o]in our express server devlopment which is just going to allow us to test everything much faster but since for post i do wnat to show you two flavours that we will use static data meaning theres an app i prepared  

const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public')) // so lets just setup the method public as our public folder thats step number one so lets set it up as our static assets and in order to do that i', just going to add first a comment and i'll say assets and then i'm going to go with app.use and this is our own method and this is going to be built in middleware the name is express static so i just grab my express instatnce i look ofr the method of static and 

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})

//post.use is applying middleware to all our routes correct and i also mi=entioned that we have this option of setting up a public folder now  we can call whatever we would want but for this methods examples i prepared a method.publuic => using this we can see how functionalty works 