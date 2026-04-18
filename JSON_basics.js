const express = require('express')
const app =express()
const {products} = require('./data')

app.get('/',(req,res)=>{
   // res.json(products) server can send only one response per request
    res.json([{name:'john'}, {name:'susan'}])// we provide two objects
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})

/*
if you look at the url of ciurse api you will see an object array in all the react couse we arempractcing dta fetching we hit the url we buikt the project using that url dta it can be any framework not just react it can be any setup where you are able to fetch that data, we can store that data on server and someone can access it and can build it any app using it thats why it is good  

for setting up a server doent matter you use sevrer side or json data 
*/

// theres tiny gap which will covered during middleware

// perfect use is data.js foile