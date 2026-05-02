## ADDITIONAL INFO RELATED TO MIDDLEWARE

1. Third-Party Middleware: morgan
You’ve added const morgan = require('morgan') and app.use(morgan('tiny')).

What it is: Morgan is a professional logger used in almost every real-world Node app.

Why use it: Instead of you manually writing console.log(req.method, req.url), Morgan does it for you automatically in a very clean, standardized format. The 'tiny' setting just means it gives you a short, one-line summary of every request.

2. Built-in Middleware: express.static
This line is a life-saver: app.use(express.static('./public')).

The Problem: Normally, if you have a CSS file or an image, Express won't send it to the browser unless you create a specific route for it.

The Solution: You put all your "static" files (HTML, CSS, Images, JS) into a folder named public (as seen in your file tree in image_2d0be6.png).

The Result: Express will now automatically serve any file inside that folder. If a user asks for /styles.css, Express looks in the public folder, finds it, and sends it without you writing another line of code.

Your Question: How to pass two middlewares to a single route?
You asked this in your code comments. If you don't want to use app.use (which applies to everything), you can pass them as an array directly into the route like this:

JavaScript
// Example of passing two specific middlewares to just one route
app.get('/api/items', [logger, authorize], (req, res) => {
   res.send('Items Page');
})
This tells Express: "For this specific route, run the logger, then run the authorize check, then finally show the items".

Summary of Middleware Options
You correctly identified the three main types in your comments:

Our Own: Custom functions like your logger or authorize.

Built-in: Tools that come with Express, like express.static.

Third-party: Packages you install via npm, like morgan.

## basic summary

1. What is morgan('tiny')?
Morgan is a third-party logger that does exactly what your custom logger was doing, but better.

The "Tiny" part: This is a pre-set format. When you use 'tiny', Morgan will print a very short summary to your terminal for every request, showing:

The Method (GET, POST, etc.).

The URL path.

The Status Code (like 200 for "OK" or 404 for "Not Found").

How long the request took in milliseconds.

How to use it:

First, you require it at the top: const morgan = require('morgan').

Then, you tell Express to use it: app.use(morgan('tiny')).

2. What is express.static?
This is a built-in "file delivery" service.

The Problem it solves: Browsers don't just need the HTML; they need the styles.css and logo.svg files mentioned in that HTML. Without static, you would have to write a separate app.get for every single image and CSS file in your project, which would be a nightmare.

How it works: You point Express to a specific folder (usually named public) using app.use(express.static('./public')).

The "Magic": When the browser asks for a file like styles.css (which we see in image_3ae229.png), Express automatically looks inside that public folder. If the file is there, it sends it back immediately. You don't have to write any code for those files—Express just "serves" them.

Summary of your "Setup" in additional_middleware.js
In your code (image_3ae2c0.png), your server is now doing three big things before it even looks at your routes:

Morgan: Logs the request details so you can see what's happening in your terminal.

Static: Checks if the user is asking for a file (like a CSS sheet) and sends it if it exists.

Routes: If it's not a file request, it then looks at your app.get('/') or app.get('/About') handlers.