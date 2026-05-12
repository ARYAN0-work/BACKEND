# how frontend JavaScript sends JSON data to Express instead of normal HTML form submission.

IG DIFFERENCE

Earlier:

HTML form
↓
form submits
↓
express.urlencoded()
↓
req.body

Now:

frontend JavaScript / axios
↓
JSON data sent
↓
express.json()
↓
req.body
🧠 THIS LINE
app.use(express.json())

means:

“If incoming request contains JSON data, parse it and put it inside req.body.”

BEFORE

We used:

express.urlencoded()

for HTML forms.

Now we use:

express.json()

for JSON requests.


THIS PART
if(!name){
   return res.status(201).json({
      success:false,
      msg:'please provide name value'
   })
}

means:

If user sends empty data:

{}

then server sends error response.

WHY THIS IS IMPORTANT

This is how modern apps work:

React
Next.js
mobile apps
APIs

Almost all communicate using JSON.