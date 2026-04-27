// how we can provide info about that one specfic product
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

app.get('/api/products/1',(req,res)=>{ // now i want a specfic link in those group of links  => but what if we have 200 links so we have route params 
    const singleProduct = products.find((product)=>product.id===1)

    res.json(singleProduct)
})


//REQ PARMS
app.get('/api/products/:productID',(req,res)=>{
    console.log(req);// gonna give  a giant onbject which have many useful prop one of them is params 
//

//// the thing that you are gonna put in url as that rout parameter is always gonna come as a string 
//

//console.log(req.params);// i am gonna destructure it in order to find that specfic product 
//

//now the actual wway
    const {productID} = req.params // it will give a string 
    const singleProduct = products.find((product)=>product.id===Number(productID))// prduct ids a re no. => now i can get my product 1,2,3,4 sepratly

    if (!singleProduct) {
        return res.status(404).send('Product does not exist')// if any other url is feeded
    }
    console.log(singleProduct);
    res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})