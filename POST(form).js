// here we are gonna create info for each and evrey tag 
const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public')) 
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})

//<form action="/login" method="POST"> in this line the method is post and we are sending it on login 

// do one thing when you make the page go inspect see network and other iptions aldo deep dive you will see headers preview response intaitatior timing cookies 

//when you enter on the page  you wikl get cannot post/login and you will gi inspect and network we know that thwere is no roite that handles the post for login but whats really intresting here is in the mnetwork tab of cours i can see my request in case this is login now this is 404 and again im going to repaet this 20,000 times but check out teh method is not get method  is not get method is post and then we are going to localhosy 5000 and then forward slasj login njow whats also really intresting the way in h+the bootom you see forum data then we have key pair value pair  we have name and johna nd if you remeber we talje about http message  that body is opyional so for example when we're sending a get request we're not sending a body but we're sending a post request its very crucial so if i want to add something onto the server of cours i want to get data i mean otherwise how i'm going to know where to add to server doesnt that make sense