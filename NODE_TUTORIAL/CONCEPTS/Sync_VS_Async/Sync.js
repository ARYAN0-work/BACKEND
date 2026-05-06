//     [bloscking]Sync_VS_Async[non-blocking]

const {readFileSync, writeFileSync}= require('fs')
console.log('start');
 
const first = readFileSync('../content/first.txt', 'utf8') 
const second =readFileSync('../content/second.txt', 'utf8')
   

writeFileSync('../content/result-sync.txt',`Here is the result : ${first}, ${second}`, 
 {flag: 'a'}) 

 console.log('done with this task');
 
 console.log('starting the next one');

 // i have start before read the file
 // now i am done writing this file => i am done with task
 // now starting the next one
 // now what we have to imagie setting up the file as the second one ois very  time consuming
 // if we have 10  users and one if them do a specfic task and it takes really long time & nide is not gona serve the other users which is a big deal and js read code syncronsily line by line

 // so if a user doing a simple task which means others user cant help with it and it means you app is down and as an alternative look at async approch
 