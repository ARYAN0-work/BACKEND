// now the problem strt if we wanted to do multiple actions if i want to read two files and then for example write one 

// SOLN => TUEN IT INTO THIS A PROMISE => AND WE WILL SETUP ASYNC AWAIT

const {readFile} = require('fs')

const getText =(path)=>{ // you made a fn getText and it take a input path[file location]
    return new Promise((resolve,reject)=>{ // creatibg a new promise has 2 outcomes
readFile(path,'utf8',(err,data)=>{// i called readfile | file location | read as text | call back[if something else,file  content]
    if (err) { // if file rading fails call  reject(err)
        reject(err) // this sends data to .catch()
    } else{
       resolve(data)
    }
})
    })
} 

getText('../content/first.txt') // calling our fn and returning promise
.then((data)=> console.log(data)) // handling success = > data = file content
.catch((err)=> console.log(err)) // if promise fails

/*
Big Picture (VERY IMPORTANT)

Flow of your code:

getText()
   ↓
readFile()
   ↓
(err?) → reject → .catch()
(data?) → resolve → .then()
*/


// this getetxt will take path bcz it wants to read two files nd write one => make file async for much clean



/*
readFile('../content/first.txt','utf8',(err,data)=>{
    if (err) {
        return
    } else{
        console.log(data);
    }
})

What is a Promise (simple meaning)

A Promise is just:

👉 “I will give you a result later (not now)”

Think of it like ordering food:

You order → pending
Food arrives → resolved
Restaurant cancels → rejected

So a Promise has 3 states:

⏳ Pending
✅ Resolved (success)
❌ Rejected (error)

Why we use Promises

Because JavaScript is asynchronous.

Example:

Reading file
API call
Database

These take time.

Without promises → messy callbacks 😵
With promises → clean .then() and .catch() 😎

    */





// now when we invoke get text it will return a promise