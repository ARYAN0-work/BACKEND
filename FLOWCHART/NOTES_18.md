## REQ

What is req (real meaning)

👉 req = everything the client sends to your server

It includes:

URL (/, /about)
Method (GET, POST)
Headers
Query params

Think:

req = "What does the user want?"

What you just built (important)

👉 This is manual routing

URL → decide response

You basically recreated a tiny version of Express routing

🔥 Mental Model (LOCK THIS)
req.url → which page?
req.method → what action?
🔥 Test it properly

Open browser:

localhost:5000/ → Home
localhost:5000/about → About
localhost:5000/xyz → 404
⚠️ Small extra thing (advanced awareness)

Browser also requests:

/favicon.ico

That’s why you saw extra request in Network tab.

🔥 Your curl error (important)

You wrote:

curl -i http://localhost:5000

Error happened because:

👉 You’re using PowerShell, not normal bash

Use:

curl.exe -i http://localhost:5000
🚀 What you’ve unlocked now
Headers ✅
Request object ✅
Routing basics ✅

👉 You’re now ready for Express

What is this line?
const url = req.url;

👉 It means:

“Take the URL from the request and store it in a variable called url”

🔍 What is req.url actually?

👉 req.url = the path user typed after your domain

Example

If user opens:

http://localhost:5000/

👉 Then:

req.url === '/'

If user opens:

http://localhost:5000/about

👉 Then:

req.url === '/about'

If user opens:

http://localhost:5000/contact

👉 Then:

req.url === '/contact'
🔥 Why we store it in a variable?

Instead of writing:

if (req.url === '/')

we do:

const url = req.url;
if (url === '/')

👉 Just for clean code + readability

No magic. Same thing.

🧠 Real-world analogy

Think:

User says: "Give me /about page"

👉 req.url = "/about"

Your code:

IF user wants "/about" → give about page
🔥 Visual flow
Browser → http://localhost:5000/about
           ↓
        req.url = "/about"
           ↓
   your if condition checks it
           ↓
   server sends response
⚔️ Mini test (do this now)

Add this:

console.log(req.url)

Then open:

/
/about
/random

👉 Watch terminal

You’ll see:

/
 /about
 /random
🧠 Final understanding

👉 req.url is how your server knows:

“Which page does the user want?”

Without it → no routing possible.