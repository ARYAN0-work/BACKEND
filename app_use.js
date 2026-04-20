/*
there are two issues with the current setup in middleware_setup first our appdress is getting somewhat clunky because i mean we have this logger then we have the methods its defintly nicer if we have this logger fn in a seprate file its just going to keep our app.js which make it easier for us to navigate and essentialy work with our application and the second issue what if i have 50 more routes and i dont want to add this fn manually to all of them wouldn't be nicer if there would be a method that essentialy just adds my middleware fn to any route and of coure the ans is yes there is such a fn in fact we used 
*/

const express = require('express')
const app = express()
const logger = require('./logger')

// if i go with navigate to localhost 5000 i still should see in a console my log and if you do then everything is correvt so thats the first part now the second how can i apply this logger to all my routes so for example let me just copy and paste these ones and i'll say api and then product and then api and i dont know not about maybe items again doesnt really matter what you palce here i'm gonna go with products as well as items again i can add them manually but the more routes i'm going to have well the bigger issue this is going to become right because for every route i need to manually add this logger so a better solution is this one where i select all if them i just remove them like so now of cours if i go to any of these routes i'm not going to have anything in a console but there is method by the name of app.use and in that app.use this is what we do we pass in the middleware so we simplyu go with logger and once i save check it out now if i go to about for example or if i go to home or api and then products hopefully you will get the idea and all the time you'll get this log in console why well bcz app.use will invoke this for any route now please do keep in mind two things forst order matters here if i'm gonna place this below app.get and if i'm going to try to do that in home page i'm not going to see anything in console why well bcz i invoke my use only after get and express evrything goes in order so if app get is before the used one the one that applies to all the all the routes then yes well first we'll hit the home route and then we'll send back home so there is no logger why you'll see all the middleware fn all the app.use at the top of document so you'll have your middleware fn first and only then you'll have all your roth methods whether thats get post and you get an idea so that's the first thing that i would like to mention now the second thing i would like to mention is the fact that we can add here a path so if i go to app.use that's my method and ionstead of providing only once argument which is my case is the logger i can set up a first one and that is going to be path and i just need to come up with a value now in my case i'm going to type apo and you'll see in a second why so if you save with an api you'll notice something intresting where this is going to be apply to both of them to products as well as the items so hers the deal once you apply this path over here basically its gonna apply to any route after this api so for example if i go with api and then some craze one home about and then products all the time is going to keep on applying this midddleware so thats something new right bcz previously we worked only with a specfic route so forward slash or about or products here in this case so of course these are diffrent now when we add thi s path to use then of course its going to be applied pretty much to anything that comes after the path that you provide over here so in my case since i provided api and of course its going to go for any path thats after that now if you want to find out more info about app.use i suggest navigating to docs again we're looking for api refrence in our case that is four and function and we're gonna cover that later as well at the specified is going to be our base and then whatever you omit the path then its just going to be applied to home about api product and now i want to make our example even more intresting them in that use what is the syntax in order to add it as file and i'm going to call this authorize 
// REQ => MIDDLEWARE => RES
app.use(logger) // also order matters dont use app.use bleow middleware
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

app.get('/api/items',(req,res)=>{
    res.send('items')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})
