# Route parameters

allow your server to handle thousands of different URLs with just one block of code

1. What is the :?
The colon tells Express:"Hey, don't look for a folder literally named 'productID'. Instead, treat this part of the URL as a variable."

Without the colon: /api/products/productID would only work if the user typed exactly that.

With the colon: /api/products/:productID acts like a wildcard. It matches /api/products/1, /api/products/abc, or /api/products/99.

2. How is productID designated to a number?
By default, it isn’t. Everything in a URL is treated as a String.

If a user visits /api/products/1, Express sees "1". That is why you have that clever bit of code on line 34:
product.id === Number(productID)

You are manually converting that string "1" into the number 1 so it can match the id in your data. If you didn't use Number(), the comparison would fail because 1 (number) is not strictly equal to "1" (string).

3. What is req.params?
req.params is an object that Express automatically builds for you. It collects every "colon variable" from your URL and puts them into one place.

If your route is /api/products/:productID and the user goes to /api/products/5:

req.params becomes: { productID: '5' }

4. What kind of destructuring is const {productID} = req.params?
This is Object Destructuring, exactly like what we did with product before!

The Object: req.params (the box containing all URL variables).

The Action: You are reaching into that box and pulling out the specific value labeled productID.

The Result: You now have a simple variable named productID that you can use anywhere in your function without having to type req.params.productID every time.

5. Why res.json at the end?
While res.send() is great for HTML, res.json() is the standard for APIs.

Explicit Intent: It tells anyone reading your code (and the browser) that you are sending Data, not a webpage.

Auto-Conversion: It ensures that whatever you pass it (an object, an array, etc.) is properly converted into a JSON string.

Correct Headers: It automatically sets the Content-Type to application/json, which helps frontend tools (like React or mobile apps) understand how to read the data you sent.

The "Feel" of the Whole Flow
URL: User asks for product 1.

Express: Sees :productID, catches the 1, and stuffs it into req.params.

You: Destructure productID out of the params.

Logic: You convert that string to a number and .find() the matching product in your data.

Response: You send that specific product back as a clean JSON object.