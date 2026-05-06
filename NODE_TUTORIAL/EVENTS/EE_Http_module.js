// events are code ommunication system inside Node.jsin module rely on it

//=> server has the ablity to listen events

//const http = require('http')
//const server = http.createServer((req,res)=>{
// res.end('welcome')
//})

//Using Event Emitter API
const server = http.createServer()
//emits request event
// subscribe to it / listen for it / respond to it
server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)

/*
What’s REALLY happening here
🔹 Step 1: Create server
const server = http.createServer()

👉 You created an object called server

BUT important:

This server is actually an EventEmitter

⚡ Step 2: Listening to an event
server.on('request', (req, res) => {
    res.end('Welcome')
})

👉 Meaning:

“Whenever a request comes, run this function”

📌 'request' is a built-in event in Node.js

🔥 Step 3: Start server
server.listen(5000)

👉 Meaning:

“Start listening for incoming requests on port 5000”

🔄 Full Flow (SUPER IMPORTANT)
Server starts (listen)
Client hits → localhost:5000

Node internally does:

server.emit('request', req, res)
Your .on('request') catches it
Response is sent
💡 The KEY REALIZATION

👉 This line:

server.on('request', ...)

is EXACTLY SAME concept as your custom emitter:

customEmitter.on('response', ...)
🔥 Internal magic (what Node is doing)

Behind the scenes:

// Node internally
server.emit('request', req, res)

You don’t see it — but it happens automatically.

🧠 Simple Analogy
Your Code	Real Life
server.listen()	Open shop
request comes	Customer enters
emit('request')	Bell rings
on('request')	Shopkeeper responds
🚀 WHY this matters (important for YOU)

This same pattern is used in:

Express (app.get, app.use)
Streams (data, end)
WebSockets
File system (fs)

👉 Basically:

Node.js runs on events everywhere

⚠️ One correction in your comment

You wrote:

// events are code building code for node

Better understanding:

Events are the core communication system inside Node.js

🧠 Final understanding (upgrade level)

👉 Your server is not “waiting in a loop”

👉 It is:

“Listening for events and reacting when they happen”
*/