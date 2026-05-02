## multiple_middleware

1. The Big Picture: The "Chain of Command"
When you use app.use([logger, authorize]) in image_490168.png, you are creating a list of people who must check a package before it reaches the final destination.

Logger gets the package first. It writes down the time and method, then calls next().

Authorize gets it second. It looks inside for a user name.

The Route Handler (like your /api/items function) only gets the package if the first two people say it's okay.

2. What is happening in authorize.js? (image_48fa1d.png)
Think of this file as a Security Gate.

The Check: It looks at the URL for ?user=john.

The Success (if): If it finds "john", it does two things:

It "pins a badge" to the request: req.user = {name:'john', id:3}. Now, every function coming after this knows exactly who "john" is.

It calls next(). This is the green light. It tells Express, "He's cool, let him through to the next function."

The Failure (else): If the name isn't "john", it sends 401 unauthorized.

Crucial: It does NOT call next(). This is the red light. The request stops here. The user gets an error message, and your "items" page is never even touched.

3. The "Lego Block" Trick
In image_490168.png, you have this route:

JavaScript
app.get('/api/items', (req, res) => {
   console.log(req.user); // This is the magic part!
   res.send('items');
})
Even though you didn't define req.user in this file, it exists here because authorize.js "attached" it to the req object before calling next().

Middleware is just a way to "prep" or "protect" your routes before they run.

Why you feel confused (The Fixes)
Check these two tiny things in your code that are likely causing "ghost" bugs:

Parameter Order: In image_48fa1d.png, change (res, req, next) to (req, res, next). Express always expects the Request first.

The "Spinning" site: If your site just circles forever, it’s 100% because a next() wasn't called in one of your middleware functions.

## magic

Think of the req (request) object as a backpack that the user sends to your server. Every function the request passes through can open that backpack, look inside, or—most importantly—add something new to it.

The "Magic" Step-by-Step
In your code, the "magic" happens because the backpack (req) travels through your functions in a specific order:

The Arrival: The user visits your site. Express creates the req object (the backpack).

The Middleware (authorize.js): The backpack goes to authorize first. Inside that file, you do this: req.user = {name:'john', id:3}. You just took a "User Badge" and stuffed it into the backpack. Then you call next().

The Destination (Multiple_Middleware.js): The backpack arrives at your route handler (app.get('/api/items')).

The Reveal: Even though you are now in a completely different file, you can type console.log(req.user) and boom—the "User Badge" is right there!

Why is this "Magic"?
Without middleware, you would have to write the code to find the user inside every single route you own.

Without Middleware: You'd have to find "John" in the Home route, find "John" in the About route, and find "John" in the Items route. (Super boring and messy).

With Middleware: You find "John" once in authorize.js, put him in the backpack (req.user), and he is now magically available in every route that comes after.

One Important Fix
To make this "magic" work, you must fix that parameter order I mentioned. In image_48fa1d.png, you wrote:
const authorize = (res, req, next) => { ... }

It must be:
const authorize = (req, res, next) => { ... }

If res is in the first spot, Express will try to put the "User Badge" into the Response (the outgoing mail) instead of the Request (the backpack), and the next function won't be able to find it.