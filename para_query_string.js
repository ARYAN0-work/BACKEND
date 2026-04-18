const express = require('express')
const app =express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')// you can see this while seeing the inspect response the whole html will be shown
})

// when you're requesting a collection of data theres going to be cases where i simply want to send back some minimal response  
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image}= product;// i am gonna iterate through over my product i'll use the map method and i'll remove my description
        return {id,name,image}
    })

    res.json(newProducts)
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})