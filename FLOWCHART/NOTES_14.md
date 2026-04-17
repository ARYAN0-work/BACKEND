## STREAMS

- used to read or write sequentialy => also we can use events on it , theres are 4 types

# why it is helpful

Core Problem

When you use normal file reading like:

fs.readFile()

👉 The entire file loads into memory (RAM)
👉 Works fine for small files
👉 ❌ Breaks for large files (memory overflow / slow / crash)

💡 Solution: Streams

Instead of loading everything at once:

👉 Streams read file in small chunks (pieces)

Think like:

❌ Old way → load whole movie at once
✅ Stream → watch movie while it’s downloading
📦 What your code is doing
const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt', {
    highWaterMark: 9000,
    encoding: 'utf-8'
})

👉 This creates a stream to read file piece by piece

⚙️ Important Concepts
1. highWaterMark

👉 Controls chunk size (buffer size)

Default = 64 KB
You changed → 9000 bytes (~9 KB)

So now:
👉 File will be read in 9KB chunks

2. encoding: 'utf-8'

👉 Converts buffer → readable text

Without it:
👉 You get raw binary data (Buffer)

3. stream.on('data', callback)
stream.on('data', (result) => {
    console.log(result)
})

👉 Every time a chunk is read:

Event "data" fires
You get that chunk in result
🧠 What actually happens

If file = 169 KB

With highWaterMark: 9000:

👉 Output like:

Chunk 1 → 9 KB
Chunk 2 → 9 KB
...
Last chunk → remaining data
🚨 Why this matters

✔ Saves memory
✔ Prevents crashes
✔ Used in:

Large file processing
Video streaming
APIs
File uploads/downloads
⚡ One-line summary

👉 Streams = read big files in small chunks instead of loading everything into memory

# HTTP-> METHOD

What this code is trying to teach
❌ Problem (Bad Approach)
const text = fs.readFileSync('../content/big.txt','utf8')
res.end(text)
Reads entire file into memory
If file is large (MBs/GBs) → 💥 memory issue
Server becomes slow or crashes

👉 Think: trying to carry a whole water tank in one go

✅ Solution: Streams
const fileStream = fs.createReadStream('../content/big.txt','utf8');
Reads file in small chunks (default ~64KB)
Doesn’t load full file into memory
Efficient for large files

👉 Think: drinking water sip by sip instead of whole tank

🔹 What is pipe()?

This is the main thing you asked.

fileStream.pipe(res)
💡 Meaning:

It connects two streams

Read stream (file)
Write stream (response)

So data flows automatically:

File (ReadStream)  --->  Response (WriteStream)
🔹 What pipe() does internally

Without pipe:

fileStream.on('data', (chunk) => {
   res.write(chunk)
})
fileStream.on('end', () => {
   res.end()
})

With pipe:

fileStream.pipe(res)

👉 Same thing, but cleaner + automatic handling

🔹 Fix your code (small mistake)

You forgot to pass res inside pipe:

❌ Wrong
fileStream.pipe()
✅ Correct
fileStream.pipe(res)
🔹 Final Clean Version
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
   const fileStream = fs.createReadStream('../content/big.txt','utf8');

   fileStream.on('error',(err)=>{
      res.end(err)
   })

   fileStream.pipe(res)
}).listen(5000)
🔥 One-line understanding
Streams → handle big data in chunks
pipe() → directly send chunks from file → response