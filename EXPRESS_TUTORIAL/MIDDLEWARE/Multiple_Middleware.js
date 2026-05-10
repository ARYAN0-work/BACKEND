// order matters => this is just an example how things work thats not how we authorize

const express = require('express')
const app = express()
const logger = require('../../logger')
const authorize = require('../../authorize')

app.use([logger,authorize]) // order matters => [(logger,authorize)] OR [authorize,logger]
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

// middleware can modify req object and then every next route/middleware can use that modification.
// see .md


app.get('/api/items',(req,res)=>{
    console.log(req.user);
    
    res.send('items')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})