// middleware are functions that excute during the request to the server each middleware fn has access to request and response objects and when it comes to functionalty litrally sky is the limit =>DONT SKIP MIDDLEWARE AT ANY COST

const express = require('express')
const app =express()
// REQ => MIDDLEWARE => RES

/*
const logger=()=>{
    const method =req.method
    const url =req.url
    const time =new Date().getFullYear()
    console.log(method,url,time);
    res.send('testing')
    next()//simply termiante the whole cycle 
}
*/
// far better
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next(); // Pass the baton!
}


app.get('/',logger,(req,res)=>{// logger is between => but when you console.log it it will give a buffer when you run this module => for ignoring it you must pass it on to a next midddleware unless you 're terminating the whole cycle by passimg the res.send and dont worry theress going to be examples => in short a middleware where you set up some kind of logic unless you;re sendin in short a middleware where you set up some kind of logic unless you are sending back to response yourself for example since i have acess to response i simply can go with res.send and again i'm going to come up with testing 
    res.send('Home') 
})

app.get('/About',(req,res)=>{
    res.send('About')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})

/*
here lets start by simple scenario where i have two routes => home and about route and in those routes and that printing the method that the user is using the url that the user is trying to acess and for ex a date and if you think that its silly there npm pkg that do that as your express app getting bigger and bigger lets see in that manner it will be more helpful -> / and /about 

now the [point] is if i go with logger and if i set up that functionalty and the route foward homepage i'll also have to do that in the about so let me showcase that so i have request object and in there i have method i have url and i'll simply set up the year bcz i dont want  to deal with js types so lets go with method now that one was on request dot  method and then we have url and then the full year prop and then invoke it and now when user is gonna hit this resourse of course i'll see that in a console.log so there it is but what if we want same functinalty in about for 500 times so create a fn fn which is middleware => logger

in short each line is imp if you dont write any one of them its gonna break 
*/

// why we need it above summary 

/*
FINAL FEEL

Middleware is NOT some special Express magic.

It’s basically:

"Run this common function before handling routes"

WHAT YOU’RE TRYING TO SAY

You have 2 routes:

/

and

/about

For BOTH routes you want:

request method
url
time/date

printed in console.

PROBLEM

Imagine:

50 routes
500 routes

You’ll repeat same logging logic everywhere 😵

That’s bad design.

SOLUTION = MIDDLEWARE

Create ONE reusable function:

CORE IDEA

Middleware = reusable logic that runs before response.

⚔️ THIS LINE FROM YOUR COMMENT

“what if we want same functionality 500 times”

💥 THIS is the entire reason middleware exists.

🔥 THIS PART

“in short each line is imp if you dont write any one of them its gonna break”

YES.

Especially:

next()

Without it:

request freezes
browser hangs


*/
