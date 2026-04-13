// it is still a pain if you only use promise => use async await[i can wait till promise is settled and i can do what i wanna do]

// more cleaner version => 1. Sequential flow (very important),No nesting at all, Easier to extend, One error handler for everything

const {readFile} = require('fs')

const getText =(path)=>{ 
    return new Promise((resolve,reject)=>{ 
readFile(path,'utf8',(err,data)=>{
    if (err) {
        reject(err) 
    } else{
       resolve(data)
    }
})
    })
} 

const start = async () => {
    try {
        const first = await getText('../content/first.txt')
        const second = await getText('../content/second.txt')

        console.log(first)
        console.log(second)

    } catch (err) {
        console.log(err);
    }
}

start()

/*  

Full flow (important)
start()
  ↓
await getText(first.txt)
  ↓
await getText(second.txt)
  ↓
(no console.log → nothing shown)

====>>>> now its resolved bcz of no nesting 
const {readFile} = require('fs')
const { result } = require('lodash')

const getText =(path)=>{ 
    return new Promise((resolve,reject)=>{ 
readFile(path,'utf8',(err,data)=>{
    if (err) {
        reject(err) 
    } else{
       resolve(data)
    }
})
    })
} 

const start = async () => {
    const first = await getText('../content/first.txt')
    console.log(first);
    
}

start()
*/

// previously => This leads to .then() chaining hell

/*
Core idea (remember this)
async → marks a function as asynchronous
await → pauses execution until Promise resolves
*/
