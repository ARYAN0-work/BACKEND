## MIDDLEWARE

USER REQUEST → SERVER → RESPONSE

REQ → MIDDLEWARE → RES

- Middleware is just a function that:

gets access to:  req ,res,next   runs BEFORE response is sent

if user visit /about 

express flow

Request comes in
      ↓
logger runs
      ↓
console.log happens
      ↓
next() says:
"okay continue"
      ↓
route handler runs
      ↓
res.send('About')

MOST IMPORTANT PART = next()

Without:

next()

the request STOPS there 

Because Express thinks:

“Middleware still handling request”

## tackling infinit loading

SO MIDDLEWARE HAS 2 CHOICES
OPTION 1

Pass request forward:

next()
OPTION 2

End cycle itself:

res.send('Blocked')

WHY MIDDLEWARE EXISTS

Because many things repeat.

Imagine:

logging
authentication
checking token
parsing JSON

You DON’T want to rewrite that in every route.

WITHOUT MIDDLEWARE 😭
app.get('/', (req,res)=>{
   console.log(req.method)
   res.send('Home')
})

app.get('/about', (req,res)=>{
   console.log(req.method)
   res.send('About')
})

Repeated code everywhere.

✅ WITH MIDDLEWARE
app.get('/', logger, (req,res)=>{
   res.send('Home')
})

app.get('/about', logger, (req,res)=>{
   res.send('About')
})

EVEN BETTER

Global middleware:

app.use(logger)

Now EVERY request uses logger automatically.

UNDERSTAND THIS LINE
app.get('/', logger, (req,res)=>{})

👉 Express sees:

1. run logger
2. logger calls next()
3. move to route callback