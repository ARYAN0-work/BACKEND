const express = require('express')
const app =express()
const {products} = require('./data')


// way to send small amount of url to tyhe server=> this info is used as parameters to fir ex. query database or filter result and thats really up depend on people who are creating sevrer what functionaly will depend on those values and what parameter gonna setup
// on hackeer news see =>
// http://hn.algolia.com/api/vl/items/:id   => domain[in our case is local5000]here it is algoia.com/api/version no./ route parameter => a pecfic id
//http://hn.algolia.com/api/vl/items/:username => same example with username
// above is the example how server works 

// we are getting data from alogo.com but in my app i can sortn i can say ok give me this specfic things for ex=>

// http://hn.algolia.com/api/vl/search?query=foo&tags=story => niw i want a specfic stiry from hacker news => ? query is just used to serach and sort things up   , foo&tags =story => basic info about our data we are requesting  , youcan also do this for a particular page in 500 pages

// after the question mark if the the setup is supported by server then of course you can add those key value pairs and the way we add them as you can see is by using key value pairs so we have question mark and then we habe a key which in this case is query and then the value now befe we continye let me make something very very clear its no like you can randomly search the wweb and jusr start adding these query string para then expevt that as miracle you'll just get the data that you're looking for a as far as the keys they're designed on a server so if i'll set up a keyy of choclate milksaked algoia api is like wtf nad same goes for value so where i'm going wiyth this now 

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

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
    
})
//
//app.get('/api/v1/query',(req,res)=>{
//    console.log('hello world');
//    res.send('hello world')
//})

app.get('api/v1/query',(req,res)=>{// a simple route with callback 
    //console.log(req.query) // you can add as many names a syou want see each and every thing is practical just do it by yourself 
    const{search, limit} = req.query
    let sortedProducts =[... products]// spread operator

if (search) {
    sortedProducts = sortedProducts.filter((product)=>{
    return product.name.startsWith(search)
    })
}    

if (limit) {
    sortedProducts = sortedProducts.slice(0,Number(limit))
}
//res.status(200).json(sortedProducts)
//res.status('hello world')

if (sortedProducts.length<1) {
    //res.status(200).send('no products matched your search')
    return res.status(200).json({success:true,data:[]})
}
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})
/**

 */