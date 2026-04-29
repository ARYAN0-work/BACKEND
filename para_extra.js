// A PRACTICAL EXAMPLE HOW A API GETS CREATED

const express = require('express')
const app =express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image}= product;
        return{id,name,image}
    })

    res.json(newProducts)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{// nested data
    console.log(req.params)
    res.send(`Product: ${productID}, Review: ${reviewID}`)
    
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})