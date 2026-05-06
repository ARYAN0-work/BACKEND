// OVER-SIMPLIFIED => No manual Promise creation, Less code, same power,Closer to real backend code -Scalable

const {readFile, writeFile, write} = require('fs')
const util = require('util') // UTIL=NODE MODUOLE[gives helper fn]
const readFilePromise = util.promisify(readFile)// converting to promise
const writeFilePromise =util.promisify(writeFile)// promisify converts callback fn to promise based fn

/*
What just happened

Before:

readFile(path, (err, data) => {})

After:

await readFilePromise(path, 'utf8')

👉 No callback needed anymore
*/

const start = async () => { // made a await fn and allow await inside
    try { // handle errir from all awaits
        const first = await getText('../content/first.txt') ///Reads file-Returns content directly-Stored in first
        const second = await getText('../content/second.txt')
        await writeFilePromise(
            '../content/result-mind-grenade.txt'
            `THIS IS AWESOME : ${first}, ${second}`
        )//This is powerful:,Creates (or overwrites) a file,Writes combined content,Example output file:
        console.log(first,second);
    } catch (err) { //Handles any error (read/write)
        console.log(err);
    }
}

start()

/*
FINAL IMPORTANT (NEXT LEVEL)

👉 Even this is not the BEST way

Node already gives you:

const { readFile, writeFile } = require('fs/promises')

Then directly:

const data = await readFile('file.txt', 'utf8')

👉 No util.promisify needed at all

🧠 One-line understanding

👉 You converted Node’s callback functions into Promise-based ones using promisify, so you can use them cleanly with async/await.
*/