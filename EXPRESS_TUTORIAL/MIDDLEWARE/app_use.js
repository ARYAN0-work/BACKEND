/*
“there are two issues with the current setup in middleware_setup”

ISSUE 1

“our app is getting somewhat clunky”  => use app.use

ISSUE 2

“what if i have 50 more routes”  => use app.use

*/

const express = require('express')
const app = express()
const logger = require('../../logger')

/*
the thing matters the most are:

1.Global middleware with app.use()
2.Order matters
3.Path-based middleware

request
↓
global middleware
↓
path middleware
↓
route
↓
response

*/


// REQ => MIDDLEWARE => RES
app.use(logger) // also order matters dont use app.use bleow middleware
// api/home/about/products

app.get('/',(req,res)=>{
    res.send('Home') 
})

app.get('/About',logger,(req,res)=>{
    res.send('About')
})

app.get('/api/products',logger,(req,res)=>{
    res.send('products') 
})

app.get('/api/items',(req,res)=>{
    res.send('items')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})
