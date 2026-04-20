// order matters => this is just an example how things work thats not how we authorize

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

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

// we are showcasing i'm gpnna add for example in app items i'm gonna set up here a log and i'll look for rec and user and you'll notice cool =>wherr if i leave this query string parameter and if i go to the api and  first i have the items and second in console i have user thats why its powerfu; we can add middleware which provide some sort of functionalty and now basically i'm attaching this to my request object so i have request object and now i'm attaching this property here and now in any of my routes now of course i went with items but in any of routes i'll have access to that user thats why middleware is so crucial and thats why it is a big part of express applications bcz it truely allows us to strcture our applications as lego blocks so we have this piece of functionalty we have that piece of functionalty and when we combine them we have this nice express server now like 
app.get('/api/items',(req,res)=>{
    console.log(req.send);
    
    res.send('items')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})