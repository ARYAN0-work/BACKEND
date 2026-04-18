const express =require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public')) 

// thers two other option for sending file which we use more often 
//app.get('/',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,'./navbar-app/app/index.html'))
//      adding to static assert - first  one 
//      SSR - second one => template engine  => index html is gonna be the route if user hit the server it will serve this index.html and since index.html basically has all the paths to browser app to logo we are in good shape  => which means we dont even have to setup send file option
//})

app.all('*',(req,res)=>{
    res.status(404).send('resorece not found')
})

app.listen(5000,()=>{
    console.log('server is listenting on port 5000');
    
})