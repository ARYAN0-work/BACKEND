You wrote:

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)

    res.send(`Product: ${productID}, Review: ${reviewID}`)
})

Let’s understand ONLY the URL first.

This URL
/api/products/:productID/reviews/:reviewID

is called a route pattern.

Normal URL

Suppose user visits:

/api/products/45/reviews/9

Then Express matches it like this:

URL Part	Meaning
/api/products	fixed path
45	becomes productID
/reviews	fixed path
9	becomes reviewID
Why : ?

The colon means:

“Dynamic value will come here.”

So:

:productID

means:

“Take whatever comes in this place and store it as productID.”

Real matching

Route:

/api/products/:productID/reviews/:reviewID

Actual URL:

/api/products/45/reviews/9

Express creates:

req.params = {
   productID: '45',
   reviewID: '9'
}
So this:
console.log(req.params)

prints:

{
  productID: '45',
  reviewID: '9'
}
BIG IMPORTANT MISTAKE IN YOUR CODE

This part:

res.send(`Product: ${productID}, Review: ${reviewID}`)

will ERROR.

Because:

productID variable does not exist directly.

You must use:

req.params.productID

and

req.params.reviewID
Correct version
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{

    console.log(req.params)

    res.send(
      `Product: ${req.params.productID}, Review: ${req.params.reviewID}`
    )
})
Easy visual understanding

Think of route like a template:

/api/products/___/reviews/___

Express says:

first blank = productID
second blank = reviewID
Example Requests
URL 1
/api/products/100/reviews/5

Result:

{
  productID: '100',
  reviewID: '5'
}
URL 2
/api/products/iphone/reviews/awesome

Result:

{
  productID: 'iphone',
  reviewID: 'awesome'
}

Because route params are just strings from URL.