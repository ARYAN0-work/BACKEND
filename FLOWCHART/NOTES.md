# FLOW

1. WHAT IS NODE ?? -THEORY WHAT IT CONTAINS WHAT IS IT ON WHAT IT RUNS HOW THINGS ARE CONNA BE, ALSO HOW TO USE REPEL. THEN CLI STARTS,WHATS GLOBALS HOW TO USE IT METHODS ALL THAT THINGS_ MOSTLY THEORY IT JUST TELLS US AND GIVES US BREIF INFO  : SUBKUCH BASICS VALE FOLDER ME HAI


=> node is tool which compiles our code to machine code chrome use v8

=>it doesnt have dom window no filesystem es6 modules, theres nothing here , it only have logic withoiut graphical interface , but can access fs info about our os => repel and cli run our code 

=> for repel ; just type node on windows poershell and then writ js 

const name ="aryan"

name
'aryan'

- and you can write her the code and go into the same folder as in windows poershell and access that

- well globals have no window these are in built methods tells about our OS and FS

__dirname
__filename
require
process

# why we need node.js
Why we need Node.js

Think of Node.js as:

“JavaScript outside the browser”

Before Node:

JS only worked in browsers
You couldn’t build servers with JS

Node gives you:

File system access (fs)
Network handling (http)

# problem 

Now imagine building a real app using only Node:

You’d have to manually:

Handle routes (if req.url === ...)
Handle methods (GET, POST)
Parse request body
Set headers
Handle errors everywhere

Example gets ugly fast:

