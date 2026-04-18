## EXPRESS : framework for creating servers

- always remove git res when you clone

# API VS SSR

Big Picture: What is happening?

You wrote:

API vs USER (Express has two options)

This means:

👉 When someone hits your server (browser / app), you can respond in 2 ways

⚡ 1. API (JSON response)
res.json()
What it means:
You send data only
No design, no HTML
Just raw info (like objects)
Example:
{
  "name": "Aryan",
  "role": "developer"
}
Who uses this?
Frontend apps (React, mobile apps)
Other servers

👉 Think:

“I give you data, you handle UI yourself”

🎨 2. SSR (Server Side Rendering)
res.render()
What it means:
Server sends ready-made HTML page
Includes design + content
Example:
A full webpage with buttons, styles, layout
Who uses this?
Traditional websites (like blogs, EJS templates)

👉 Think:

“I give you full UI already built”

🔥 Your line explained simply:

api = setting up http interface

👉 Means:

You create routes (URLs) like:
/app.get('/api/users', ...)
This is how others talk to your server
🔄 Data Flow (VERY IMPORTANT)

You wrote:

data is sent using JSON

Here’s the real flow:

Client (browser/app) sends request
Server processes it
Server sends response using:

👉 res.json() → for data
👉 res.render() → for UI

⚙️ This part:

res.json does heavy lifting

Yes — Express automatically:

Converts object → JSON
Sets headers (Content-Type: application/json)

So you don’t worry about low-level stuff.

🧩 This part:

server side rendering → templates

Means:

You use template engines (like EJS)
Fill data into HTML
Send complete page
🧠 Final clarity (this is what you should remember)

There are only 2 ways your backend responds:

🔹 Option 1 (Modern way)
Send JSON
Frontend (React) handles UI
🔹 Option 2 (Old / simple way)
Send HTML directly
Server handles UI
💪 Real-world mindset (important for your path)

Since you're going MERN:

👉 Focus on:

res.json() (API style)
Forget SSR for now

Because:

React = frontend
Express = backend API


