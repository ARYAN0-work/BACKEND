## its a framework not a built in module helps to create apps

- --save flsag for github refrence if you didnt write when someone other cloned hes gonna get prob

- When you install a package using npm, you often use:

npm install express --save

- What --save does: It adds the package to package.json under dependencies.

SO;

If YOU install it → your project works
If SOMEONE CLONES your repo → they can just run:npm install and everything installs

- the prob;

If you don’t save dependencies, then:

-They won’t be listed in package.json
-Someone cloning your repo runs npm install, missing packages → app break

# the soln => Modern npm (v5+) automatically saves dependencies.

npm install express-> npm install express --save

## CONCLUSION

- npm automatically saves dependencies in package.json (earlier we used --save)
- important so that when someone clones the repo, npm install installs everything

## some  basic terms

Perfect question.
This is the core of understanding Express requests.
Think of:
req
as a BIG request object containing different kinds of user data.
Different properties store different parts of the request.

🧠 1️⃣ req.params
👉 Data from URL placeholders.

Route
app.get('/users/:id', ...)

Request
/users/42

Result
req.params// { id: '42' }

⚡ USE CASE
Identify specific resource.
Examples:


user id


product id


review id



🧠 FEEL
WHICH resource?


🧠 2️⃣ req.query
👉 Data after ? in URL.

Request
/products?search=chair&limit=2

Result
req.query// {//   search: 'chair',//   limit: '2'// }

⚡ USE CASE
Filtering / searching / sorting.

🧠 FEEL
HOW should data be returned?


🧠 3️⃣ req.body
👉 Data sent inside request body.
Mostly used in:


POST


PUT


PATCH



Example Request
{  "name": "Aryan",  "age": 20}

Result
req.body// {//   name: 'Aryan',//   age: 20// }

⚡ USE CASE
Sending actual data to server.
Examples:


signup form


login form


creating product



🧠 FEEL
WHAT data is user sending?

⚠️ IMPORTANT
For req.body to work:
app.use(express.json())
middleware is needed.


🧠 4️⃣ req.url
👉 Entire requested path.

Request
/products?search=chair

Result
req.url// "/products?search=chair"

⚡ USE CASE
Mostly logging/debugging.

🧠 FEEL
What exact URL was requested?

🎯 FINAL TABLE
PropertyComes FromPurposereq.paramsURL placeholdersidentify resourcereq.queryafter ?filtering/searchreq.bodyrequest bodysend datareq.urlfull URL pathlogging/debugging

⚔️ FULL EXAMPLE
/users/10?active=true
Body:
{  "name": "Aryan"}

Then:
req.params// { id: '10' }req.query// { active: 'true' }req.body// { name: 'Aryan' }req.url// "/users/10?active=true"

🧠 BIG PICTURE
Different request data → different req properties.

