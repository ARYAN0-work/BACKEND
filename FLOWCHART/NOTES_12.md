## REFRACTOR_ASYNC

- in promises
Problems:

Nested .then() 😵
Harder to read
Flow is not obvious

- now in async/await

WHY this helps (real reasons)
1. 🧠 Looks like normal synchronous code

👉 Top → bottom execution

const first = await ...
const second = await ...

✔ Easy to read
✔ Easy to debug

2. 🔗 Sequential flow (VERY important)

👉 Second runs only after first finishes

const first = await getText(...)
const second = await getText(...)

✔ Useful when:

Order matters
One depends on another
3. ❌ No nesting

👉 Everything is flat

✔ Cleaner
✔ Scales better

4. 🛡 Single error handler
try {
  ...
} catch (err) {
  ...
}

👉 Instead of multiple .catch() or error checks

5. ⚡ Still non-blocking (IMPORTANT)

👉 This is where many get confused:

await getText(...)

❌ It does NOT block Node.js
✅ It only pauses THIS function

👉 Event loop is still free for other users

🔥 What’s happening behind the scenes

👉 Your code:

await getText(...)

👉 Actually becomes:

getText(...).then(...)

👉 So:

Still using Promises internally
Still using Event Loop
Still non-blocking
🧠 Final understanding

👉 async/await = syntactic sugar over Promises + better readability + control

💡 One-line takeaway

👉 “async/await makes async code look synchronous without blocking the system.”

⚠️ One advanced note (don’t miss)

Your code is sequential right now:

👉 first → then second

If you want faster (parallel):

const [first, second] = await Promise.all([
  getText('../content/first.txt'),
  getText('../content/second.txt')
])

🚀 Both run together

=> create file

1. Importing module
2. Creating getText
You created a function that:

Takes a file path
Returns a Promise

👉 Meaning:

Success → resolve(data)
Error → reject(err)
nside Promise → calling readFile
This is where real async happens:

Node sends file reading to system (OS)
JS does NOT wait
Callback will run later
4. Handling result
👉 Promise becomes rejected
👉 Goes to .catch() or try/catch
Success case
👉 Promise becomes resolved
👉 Goes to .then() or await
5. Creating async function start
This function:

Can use await
Automatically returns a Promise

. Try-Catch block
try {

👉 Handles:

All success code inside
Any error thrown by await
🔹 7. First file read
const first = await getText('../content/first.txt')

👉 What happens step-by-step:

getText() is called
It returns a Promise
readFile is sent to system
await pauses THIS function only
Event loop continues doing other work

👉 When file is ready:

Promise resolves
first gets data
🔹 8. Second file read
const second = await getText('../content/second.txt')

👉 Same process again

⚠️ Important:

This runs after first finishes (sequential)
🔹 9. Logging result
console.log(first)
console.log(second)

👉 Prints file contents

🔹 10. Error handling
} catch (err) {
  console.log(err)
}

👉 If ANY step fails:

File not found
Read error

👉 Control jumps here

🔹 11. Starting execution
start()

👉 This actually runs everything

🔥 FULL FLOW (REAL RUNTIME)

👉 When you run:

start() is called
First await getText()
File read is offloaded
Function pauses
Event loop is free
File completes → Promise resolves
Code resumes
Second file runs
Same process
Logs output
🧠 SUPER IMPORTANT UNDERSTANDING

👉 Even though it looks like:

const first = await ...

❌ It is NOT blocking Node
✅ It is only pausing this function

⚡ Final Summary
You converted callback → Promise
Then used async/await for cleaner flow
Event loop handles execution in background
No blocking unless YOU write blocking code
💡 Ultimate one-line takeaway

👉 “Your code looks synchronous, but runs asynchronously using Promises + Event Loop.”

## NODE-NATIVE OPTION 

- JUST LEARN TO WRITE FOR BOTH 1 AND 2 



