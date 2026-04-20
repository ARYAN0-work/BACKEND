// DEFAULT METHOD BROWSER PERFORM SO 

const express = require('express')
const app = express()
// data.js -> api people bcz it has array -> id blah blah
let {people} = require('./data')

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})