const express = require('express')
const app =express()
const {products} = require('./data')

app.get('/',(req,res)=>{
   // res.json(products) server can send only one response per request
    res.json([{name:'john'}, {name:'susan'}])// we provide two objects
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
    
})

/*
if you look at the url of course api you will see an object array in all the react couse we are practcing data fetching we hit the url we built the project using that url dta it can be any framework not just react it can be any setup where you are able to fetch that data, we can store that data on server and someone can access it and can build it any app using it thats why it is good  

for setting up a server doent matter you use sevrer side or json data 
*/

// theres tiny gap which will covered during middleware

// perfect use is data.js file

/*
First: What is this line doing?
const { products } = require('./data')

This is called destructuring.

In your data.js, you have:

module.exports = { products, people }

👉 That means:

require('./data')

returns:

{
  products: [...],
  people: [...]
}
🔍 So why { products } ?

Instead of doing:

const data = require('./data')
console.log(data.products)

You directly extract it:

const { products } = require('./data')

👉 Same as:

const products = require('./data').products
⚡ Why we do this?
Cleaner code
Direct access
No need to write data.products again and again
🔥 Now the REAL confusion: this line
res.json([{ name: 'john' }, { name: 'susan' }])

You asked:

why [{}] ?? why this syntax??

🧠 Break it down slowly
{} = object
{ name: 'john' }

👉 One object

[] = array
[
  { name: 'john' },
  { name: 'susan' }
]

👉 Array of objects

💡 So [{}] means:

“I am sending a list of objects”

🚀 Why array of objects?

Because in real apps:

products → many items
users → many people
posts → many entries

So backend sends:

[
  { "id": 1, "name": "product1" },
  { "id": 2, "name": "product2" }
]

👉 Frontend loops over this

⚙️ What does res.json() do?

In Express.js:

res.json(data)

👉 Automatically:

converts JS → JSON
sets header (Content-Type: application/json)
sends response
⚔️ Equivalent in raw Node (for understanding)
res.writeHead(200, { 'Content-Type': 'application/json' })
res.end(JSON.stringify(data))

👉 Express simplifies this to:

res.json(data)
🧠 Connect it to YOUR code

You already have:

const { products } = require('./data')

So instead of this:

res.json([{ name: 'john' }, { name: 'susan' }])

👉 You should actually do:

res.json(products)
⚡ Final Mental Model
{} → single item
[] → list of items
[{}] → list of objects (MOST COMMON in APIs)
🚀 Why this matters (very important)

Later when you use React:

products.map(product => ...)

👉 That only works if backend sends an array

🔥 Straight Talk

You weren’t confused about syntax—you were missing:

“Why backend sends arrays of objects”

Now you know:

Because real data is always a collection
*/