const express = require(express)
const app = express()

app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.send('Home Page')
})

app.get('About',(req,res)=>{
    res.status(200).send("About")// the status is for network tab always write this 
})

app.all('*',(req,res)=>{
    res.status(400).send('<h1>resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening on 5000...')
    
})


//app.get => USED TO FETCH[Think of fetch as the "Question" from the user, and Express providing the "Answer"] DATA 
//app.post => USED TO SEND DATA

//app.all 
/*
you used app.all. This is a "universal" handler.

The "All" part: It responds to every HTTP method (GET, POST, PUT, DELETE, etc.).

The '*' part: This is a wildcard meaning "any path."

Why use it? It is most commonly used at the very bottom of your code to handle 404 errors. If none of the routes above it match the user's request, app.all('*') catches it and sends back a "Resource Not Found" message.

*/


//app.put => USED TO UPDATE EXISTING DATA
//app.delete=> Handles requests to delete data from the server.
//app.use => Adds middleware; runs for all requests to process data or logs.
//app.listen => Starts the server on a specific port.

/*
req (Request): Contains information about the incoming request (e.g., URL parameters, headers, body data).


res (Response): Used to send a response back to the client.

res.send(): Sends a basic string or HTML response.
res.status(): Sets the HTTP status code (e.g., 200 for OK, 404 for Not Found). It's best practice to chain these: res.status(404).send('Not Found').
*/