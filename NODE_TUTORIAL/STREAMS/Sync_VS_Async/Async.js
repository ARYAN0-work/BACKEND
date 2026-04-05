const {readFile,  writeFile}= require('fs') 

console.log('start');

readFile('../content/first.txt',(err,result)=>{
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
})


readFile('../content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
})

readFile('../content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return  
    }
    const first = result;
    readFile('../content/second.txt','utf8',(err,result)=>{

        const second = result; 

    writeFile('../content/result-async.txt',
       `Here is the result : ${first}, ${second}`
    ,(err,result)=>{
     if (err) {
        console.log(err);
        return
     }
     console.log('done with this task')
    })
    })
})    
console.log('starting with new task');
// notice we have starting with new task at next after start 
// since we asynchronus approch the moment we start we just offload the task and we continue our code and
// and user no. one get her for ex  he  wants to get this functinalaty=>
    // node can offload this task and start on serving other users agaon it seems a but trivial at the moment bcz wehave the basic approch

// => but notice its a bit messy we want acomplish only some tasks now alternative are using promises as well as async await

// use thiese when you want read the file or write the file mostly in the course reading or wriyting from the database
