// EX= aysnc version of readfile method

const { readFile} = require('fs')

console.log('started a first task');
// CHECK FILE PATH !!!!
readFile('../content/first.txt', 'utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('started next task');

// the reason why this happeng bcz readfile is asynchronus and we know event will offload it to a FS so we start reading the file notice like okay run this line of code then offlad this one[result] and only when i get the result then run the callback so when the fs resonds with the error or the data we invoke this one all right so we offload this task and we just keep on reading the code thats why we have started the fiorst task starting  the nextx one so right away go to the next tset and this one we are just offloading and when response come whether its success or only then we invoke the callback hopefully that is clear

