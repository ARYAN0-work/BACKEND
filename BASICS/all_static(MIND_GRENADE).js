const express = require('express')
const path = require('path')

const app =express()

// setup static and middleware
app.use(express.static('./public')) // do this instead of res.send blah blah blah
//app.get('/',()=>{
//    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//    adding to static assets 
//    SSR
//})

app.all('*',(req,res)=>{
    res.status(400).send('resorce not found')
})

app.listen(5000,()=>{// port we are listenkng on
    console.log('server is listening on port 5000....');
    
})

// => all observation were made on network tab 

// the main pnt is when it comes to sedn file if we are using it to send back for example index html actually we use other two methods instead so first the first one is where we dump each and everything in static[each and everything in pu8blic folder me dal do ] assets in the public and that will effectivly do exactly the same and other one is server sync rendering [later]

/*
in order to set everything up now of course i just need to take my index html and again isf you wnat you can just move it or in my casee im just going ti cipy paste so again im going back to my folder and zoom in masivly so [ mota mota undex.html public me  dala hai ] so what happens index.html is always going to be a root so when the user hits the server by default server will sevrve this index.html and since our index,html basically jass all the oaths to browser app to log and all that  we are going to be in good shape and once i refresh i'm still serving my app so we're still in good shape and if you take a lool=k at the network tab notive everythingh still works correctly im still gettingt all the css broweer js functionality as well as logo to ans to que yes that is effectuivly how yiu can set ipt the simple sites you can publuc just make sure you serve them up and thats it 
*/
