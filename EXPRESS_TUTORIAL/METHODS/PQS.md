# can we pass html into res.send =>

When you pass a string to res.send(), Express automatically sets the Content-Type header to text/html. The browser receives that string, sees the header, and renders it as a webpage.

# products.map()

To get the "feel" of how .map() works, don't think of it as a loop that just "does things." Think of it as a transformer.

Imagine a factory assembly line. You have a crate of raw materials (products), and you want a crate of finished parts (newProducts).

1. The Setup
products is an array of objects. Let's say each object looks like this:

JavaScript
{ id: 1, name: 'Chair', image: 'url', description: 'Very comfy' }
2. The Internal "Callback" Mechanism
When you call .map(), JavaScript does the following behind the scenes:

It creates a brand new empty array (this will eventually become newProducts).

It starts a loop that visits every single item in the products array one by one.

For each item, it takes that specific item and "plugs" it into your function as the variable product.

3. The Transformation (The "Feel")
Inside your function, you are performing Destructuring:
const {id, name, image} = product;

You are essentially saying: "I see the whole object, but I am only grabbing the id, name, and image. I'm leaving the description behind on the floor."

Then, you return {id, name, image}. This return is crucial. Whatever you return is "caught" by the map method and pushed into that new array it created.

4. The Result
Once the loop finishes visiting every item, .map() hands you back the finished list.

Original Array: 10 items with 4 properties each.

New Array: 10 items with only 3 properties each.

Why use this instead of a regular forEach?
Because .map() is "pure." It doesn't change your original products data; it creates a clean, slimmed-down version specifically for your API response. This keeps your data source safe while giving the user exactly what they need.

- ASEEMBLY LINE METHOD

const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
});

// Or the "Pro" one-liner:
const newProducts = products.map(({ id, name, image }) => ({ id, name, image }));