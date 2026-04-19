const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// 1. use vs route 
// 2. options - our own / express / third party 

/* FIRST 2 COMMON QUESTION 

1. if we have acces to app.use how we gonna add it to the middleware in a route and actually the ans is yes bcz imagine the scenario where i dont wanna apply this app.use to all my routes for ex-> i want to setup for authorize but not for query string but then how we can pass two middleware if you would want in a single route 

2. so what are the options for middleware -> first one our own which we made and then built in module[app.use] and then theres third party middleware 

*/
app.use(morgan('tiny'))
//app.use([logger,authorize]) 
// line 13=>
app.use(express.static('./public'))

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
    console.log(req.send);
    
    res.send('items')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})