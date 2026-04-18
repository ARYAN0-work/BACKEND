const express =require('express')
const path = require('path')// now when it comes to get i want to send the file more specifically i would want to send back the index.html for that i nedd to use send file method comes with express for that i need absolute path

const app = express()

//setup static and middleware
app.use(express.static('./public')) // only by writting this the app works if dont line 10 prob would happen
// app.use is setting up for middleware , express.static is built in middleware

app.get('/',(req,res)=>{// we wanna start with our html => we want that all our incoming request go to a rout 
    res.sendFile(path.resolve(__dirname,'./navbar-app/app/index.html'))// we can also use path.join but we still have the prob which we have with http modules
})

app.all('*',(req,res)=>{// setting up functionalty
    res.status(404).send('resorece not found')
})

app.listen(5000,()=>{
    console.log('server is listenting on port 5000');
    
})// search listen:5000/style.css you will get the css file

// static asset => an asset where the server doesnt need to change it we simply place it in designated folder => public

// ex - i have 20000 photos i will just dump it and express will take care of it all , it will setup mime path , status code

// if js is dynamic how can all this be static => it makes broweser dynamic as far as server is concrend its just a asset that doesnt need to change 