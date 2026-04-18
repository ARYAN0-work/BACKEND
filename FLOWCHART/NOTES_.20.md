## JSON 

What this file is doing (simple view)

👉 You created a basic Express server
👉 When someone visits / → you send JSON data

🔍 Line-by-line breakdown
1️⃣ Import Express
const express = require('express')

👉 You’re bringing in Express (backend framework)

2️⃣ Create app
const app = express()

👉 This app is your server

3️⃣ Import data
const {products} = require('./data')

👉 You are loading data from another file (data.js)

Think:

“Instead of writing data here, I store it separately”

4️⃣ Route (VERY IMPORTANT)
app.get('/', (req, res) => {

👉 Meaning:

“When someone visits / (homepage), run this function”

❌ Your mistake here (important)
res.json(products)
res.json([{name:'john'}, {name:'susan'}])

👉 You are sending two responses

⚠️ This is WRONG — server can send only one response per request

✅ Fix it (choose one)

Option 1:

res.json(products)

Option 2:

res.json([{ name: 'john' }, { name: 'susan' }])

👉 Not both.

🧠 Why only one response?

Think like this:

Client sends 1 request
Server must send 1 final answer

If you try 2 → server gets confused → crashes or ignores second

5️⃣ Start server
app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})

👉 This means:

“Start server on port 5000”

Now you can open:

http://localhost:5000
🔥 What you wrote in comments (explained simply)
✍️ Your idea:

“React fetches data from API”

✔️ Correct.

Flow:

React → sends request (fetch)
Express → returns JSON
React → displays it
✍️ “any framework can use it”

✔️ Also correct.

Because:

JSON is universal
Any frontend (React, Angular, mobile app) can use it
✍️ “we store data on server”

✔️ Yes.

Right now:

You're using data.js (fake database)

Later:

You’ll use MongoDB

# gist

The Gist (lock this in)

👉 You built a simple backend API

When someone hits your server (/)
It sends back data (JSON)
⚡ What’s happening in one sentence

“My server gives data when someone requests it.”

🔁 Real flow
Someone opens localhost:5000
Your server catches it

Your server sends:

products or users data
That’s it
🔥 What you're practicing here
How to create a server
How to create a route
How to send JSON data
🧩 Why this matters (very important)

This is the foundation of MERN

Later:

React → will request this data
Your server → will send JSON
MongoDB → will store real data
💪 Final mental model

👉 Your backend = data provider

Not UI, not design.

Just:

“You ask → I give data”

# para_query_string => setup

PART 1 — YOUR CODE (what it literally does)
🔹 1. Home route
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

👉 If you open /
You get:

A simple HTML page
A link → /api/products
🔹 2. Products route
app.get('/api/products', (req, res) => {

👉 This runs when user goes to:

/api/products
🔹 3. Map logic
const newProducts = products.map((product) => {
  const { id, name, image } = product
  return { id, name, image }
})

👉 What this does:

You take full product data
You remove extra stuff (like description, price etc.)

You only keep:

id, name, image

👉 Think:

“Don’t send unnecessary data”

🔹 4. Send response
res.json(products)

⚠️ Small issue:

You created newProducts
But you're sending products

👉 Should be:

res.json(newProducts)
🔹 5. Start server
app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})

👉 Server starts on port 5000

⚙️ PART 2 — WHAT’S HAPPENING BEHIND THE SCENES

Now the real understanding 👇

🔁 Step-by-step real flow
1. You open browser
http://localhost:5000/api/products
2. Browser sends request

👉 A request goes to your server:

GET /api/products
3. Express catches it
app.get('/api/products', ...)

👉 Express says:

“Oh, I have a handler for this route”

4. Your function runs
(req, res) => { ... }
req = what user asked
res = how you reply
5. Data processing
products.map(...)

👉 You clean/filter data

6. Response goes back
res.json(...)

👉 Server sends JSON back

7. Browser receives it

👉 Browser shows raw JSON

🧠 CORE IDEA (this is what you remember)

👉 Backend flow is always:

Request comes in
You process data
You send response
⚡ WHERE QUERY COMES IN

Right now:

/api/products

👉 Gives ALL products

Later with query:

/api/products?search=phone&limit=2

👉 Same route, but:

req.query has extra instructions
You modify data before sending
💪 Final clarity (no confusion now)

👉 Your current code:

“Give all products (but only id, name, image)”

👉 Query params (next step):

“Give filtered/specific products based on user input”