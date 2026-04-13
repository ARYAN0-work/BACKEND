## NODE INFO

# GIST

🔹 What your notes are saying (clean version)
npm (Node Package Manager) gives access to ready-made code written by other developers.
Instead of building everything from scratch, you can:
install a package
use it directly in your project

👉 Example: instead of coding a slider yourself, install a package.

🔹 What happens when you install something

When you run:

npm install express

It:

Downloads the package
Stores it inside node_modules
Adds it to package.json (dependencies)
🔹 The 3 main things npm allows

✔ Use code written by others
✔ Reuse your own code in different projects
✔ Share your own code with the world

🔹 Important truth (you wrote this too 👇)

“there’s no quality control”

✔ Correct. Anyone can publish on npm
👉 So YOU must decide:

is it safe?
is it popular?
is it maintained?
🔥 Now your main doubt:
Difference between Module, Package, and Dependency

This is where most beginners get confused — let’s fix it cleanly.

1️⃣ Module

👉 Smallest unit of code

A single file or reusable piece of code
Can be your own file or built-in
Example:
const fs = require("fs");

Here fs is a module

Or:

const add = require("./math.js");

Your own file = module

2️⃣ Package

👉 A folder that contains modules + package.json

A complete reusable project
Published on npm
Example:
express/
  ├── index.js
  ├── router.js
  ├── package.json

👉 So:
Package = collection of modules + metadata

3️⃣ Dependency

👉 A package your project depends on

Anything you install using npm
Example:
"dependencies": {
  "express": "^4.18.2"
}

👉 Here:

express = dependency of your project
⚡ Clean Comparison
Term	Meaning	Example
Module	Single file / piece of code	fs, math.js
Package	Collection of modules + config	express
Dependency	Package your project uses	express in your app
🧠 One-line understanding (remember this)
Module → building block
Package → collection of blocks
Dependency → package your project needs

## now npm basic commands 

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

Quick understanding (so it sticks)
npm i express → installs locally (only this project)
npm install -g nodemon → installs globally (usable anywhere)
npm --version → checks npm version

# ways to create manifest file[file having the whole code in it like a brsin]

1. manual approch
2. npm init => full process
3. npm init -y [default-yes]


# the actual idea

package.json is basically the identity card of your project. It stores important information like the project name, version, and most importantly the dependencies (packages your project needs to run). When you install something like lodash or express, it gets saved inside package.json, so anyone else (or even you later) can install all required packages using just npm install. These dependencies are then stored physically inside the node_modules folder. Sometimes, a package you install also depends on other packages, so npm automatically installs those too — that’s why you might see multiple dependencies even if you installed only one. In short, package.json tells what your project needs, and node_modules actually contains those things.

## now wap which require lodash have items =4 and and looped arrays tehn use flattendeep methid on that and print it
