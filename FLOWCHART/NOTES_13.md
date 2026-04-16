## EVENT EMITTER

- IN Node.js, event-driven programming is used heavily

# SETTING EVENT_EMITTER

- wap require event, invoke it lsiten on it print data recived and emit it

🧠 Think of it like this:

👉 EventEmitter = a notification system

Like:

You click a button → event happens
Someone listens → reacts
🔧 Your Code Breakdown (in simple words)
1️⃣ Import EventEmitter
const EventEmitter = require('events')

👉 You’re getting a built-in class from Node.js
Think: “tool to create events”

2️⃣ Create your own emitter
const customEmitter = new EventEmitter()

👉 Now you created your own event system
Like: your own mini notification center

🔑 Two important methods
👉 on() = LISTEN
customEmitter.on('response', () => {
    console.log('data received')
})

👉 Meaning:

“Hey, when 'response' event happens, run this function”

📌 This is like:

“If bell rings → open door”
👉 emit() = TRIGGER
customEmitter.emit('response')

👉 Meaning:

“Trigger the 'response' event NOW”

📌 This is like:

“Ring the bell”
🔄 Flow (very important)
You set a listener
Then you emit the event
Listener runs automatically
⚡ In your case step-by-step:
customEmitter.on('response', () => {
    console.log('data received')
})

👉 “If 'response' happens → print message”

customEmitter.emit('response')

👉 “Trigger 'response' event”

🔥 Output:
data received
💡 Real-life analogy
Code	Real Life
on('response')	Waiting for a phone call
emit('response')	Phone rings
callback runs	You pick up and talk
🚀 Bonus (important for backend)

You can pass data too:

customEmitter.on('response', (name) => {
    console.log(`Hello ${name}`)
})

customEmitter.emit('response', 'Aryan')

👉 Output:

Hello Aryan
🧠 Final Understanding

👉 EventEmitter =
“Do something when something happens”

# HTTP module

- create event listen with the help of http

- its just god-damn basics easily understandable 

