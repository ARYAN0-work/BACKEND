## PUT

1. The URL Strategy: "The Target"
In your comments (Lines 49-51), you explain why the URL changes from /api/people to /api/people/:id.

The List vs. The Item: When you POST, you use the whole list (/api/people) because you are adding to the group.

The Specific Request: When you PUT (update) or DELETE, you need a specific path (/api/people/:id) because the server needs to know exactly which "package" or "person" you are talking about.

2. The Two-Sided Request
You made a great observation in Lines 56-58: a PUT request is "two-sided".

Side A (Route Params): You use :id from the URL to locate the person (e.g., "Find person #2").

Side B (Request Body): You use req.body to provide the new data (e.g., "Change their name to Susan").

The Difference with DELETE: You noted that for a DELETE request, there will be nothing in the body—you only need Side A to tell the server which one to remove.

3. Route Parameters (req.params)
In Line 53, you remind yourself that you can call the parameter anything.

The Placeholder: In app.put('/api/people/:id', ...), the :id is just a variable.

The Access: You access it via req.params.id. If you had written :personID, you would use req.params.personID.

Logic Summary in your Code
Your code on Lines 60-64 implements exactly what your comments describe:

It grabs the target ID from the URL (req.params).

It grabs the new name from the package (req.body).

It uses .find() to see if that person actually exists in your data before trying to change anything.

## DELETE

1. The "Vanishing" Logic
Look at image_c09f57.png (Lines 69–81). Just like with your PUT method, you are using Route Parameters (:id) to target a specific person.

The Target: You grab the ID from the URL using req.params.id.

The Search: You first use .find() to check if that person exists. If they don't, you return a 404 error.

The Deletion (The Filter): This is the key part on Line 77. You use people.filter().

How it works: You tell JavaScript: "Give me a new array containing everyone EXCEPT the person with this ID".

Since you aren't actually deleting from the original file (you're just creating a new list without them), the user "vanishes" from the response.

2. No Body Required
Notice that in your app.delete block, there is no const { name } = req.body.

Why? To delete someone, you only need to know who they are (the ID). You don't need to send any extra data in the "package".

3. Summary of your Progress
You have now built a full API in these files!

GET: To see the people.

POST: To add a new person.

PUT: To change someone's name.

DELETE: To remove someone from the list.

One Small Logic "Bug" to Watch Out For
In image_c09e61.png, look at your PUT route on Line 60.

Inside the .map(), you are doing person.name = name.

The Danger: This actually changes the data inside your people variable globally.

Better way: Usually, developers prefer to return a new object (e.g., return { ...person, name: name }) so they don't accidentally mess up the original data until they are ready.