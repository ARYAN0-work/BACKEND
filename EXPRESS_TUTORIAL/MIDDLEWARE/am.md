## additional_middleware

This file is basically teaching:

app-level vs route-level middleware
custom vs built-in vs third-party middleware
static middleware
morgan logger

FIRST SECTION

1️⃣ USE VS ROUTE MIDDLEWARE
A) App-level middleware
app.use(logger)

Runs globally.

B) Route-level middleware
app.get('/about', logger, (req,res)=>{})

Runs only for that route.

🧠 FEEL
Type	Scope
app.use()	many/all routes
route middleware	one specific route

2️⃣ TYPES OF MIDDLEWARE

Your comment:

our own / express / third party

means:

A) YOUR OWN MIDDLEWARE

Example:

const logger = require('./logger')

You wrote this yourself.

B) EXPRESS BUILT-IN MIDDLEWARE

Example:

express.static()

Provided by Express itself.

C) THIRD-PARTY MIDDLEWARE

Example:

morgan

Installed from npm.

🧠 NOW THIS LINE
app.use(morgan('tiny'))

This is third-party middleware.

⚡ WHAT MORGAN DOES

Automatically logs requests.

Example output:

GET /about 200
🔥 WHY USE IT?

Instead of manually writing:

console.log(req.method)
console.log(req.url)

Morgan already does professional logging.

🧠 'tiny'
morgan('tiny')

is preset format.

Morgan has different log styles.

 FINAL BIG PICTURE OF THIS FILE
You’re learning:
middleware can come from:↓your codeexpressnpm packages
and all are plugged into Express pipeline using:
app.use()

🎯 FINAL FEEL
Express server is basically:
middlewares+routes+request flow
Everything connects through middleware chain.