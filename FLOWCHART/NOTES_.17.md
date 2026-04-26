## HTTP-> HEADERS

What are HTTP Headers (real meaning)

Think like this:

👉 When server sends response, it sends 2 things:

Data (body) → actual content (<h1>home page</h1>)
Metadata (headers) → instructions about that content
🔁 Real Flow
Client (browser)
   ↓ request
Server
   ↓ response
[ Headers + Body ]
🔹 What your code is doing (simplified)

You wrote:

res.writeHead(200, { 'content-type': 'text/html' })

This line = sending metadata

Let’s decode it:

🧠 1. Status Code
200

Means:

✅ success
request handled properly

Other examples:

404 → not found
500 → server error
🧠 2. Content-Type (MOST IMPORTANT)
'content-type': 'text/html'

This tells browser:

👉 “Hey, what I’m sending is HTML”

So browser will:

render it as a webpage
🔥 What if you change it?
Case 1:
'content-type': 'text/plain'

👉 Browser shows raw text:

<h1>home page</h1>
Case 2:
'content-type': 'application/json'

👉 Used for APIs

{ "name": "Aryan" }
🔹 Why headers matter (this is the key insight)

Without headers:

browser gets confused
doesn’t know how to handle response

So:

👉 Headers = communication protocol between server and client

🔹 Your Code Full Meaning (decoded)
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    res.end()
})

server.listen(5000)
What happens:
Server starts on port 5000
Browser hits localhost:5000
Server responds:
status → 200
header → "this is HTML"
body → <h1>home page</h1>
Browser renders HTML
🔹 What YOU should take from this (important)

Don’t memorize syntax.

Understand:

👉 res.writeHead() = set rules of response
👉 res.write() = send data
👉 res.end() = finish response