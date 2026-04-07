const express = require('express')
const app =express()

app.get('/',()=>{
    console.log('user hit the resource');
    
    res.send('Home page')
})// i nedd twoi things a path so what resouce user is trying to access and it would make sense if we would start with root correct and then and 2nd thing is callback fn= this callback fn will get invoked every time as user is performing get requesyt on our route so basically on our dfomain and the this callbacjk fn gets same with 2 arguments

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})
app.listen(5000,()=>{// poet we are listenkng on
    console.log('server is listening on port 5000....');
    
})

// by default all browser perform a get request


//app.post
//app.get
//app.put
//app.delete
//app.all - it works with all of them
//app.use
//app.listen  => same as in http module