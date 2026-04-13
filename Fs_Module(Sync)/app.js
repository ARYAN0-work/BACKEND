// now we have an option of interacting with file system and the name of the module is fs now essentially there are two flavours when it comes to file module we can do assynchronsly[non-blocking] or synchrosly[blocking]

/////////// DIFFRENT METHOD HOW TO ACCESS method we just destructure them out of the fs module

// 1. const {readFileSync} = require('fs');
// 2. const fs = require('fs');
// 3. fs.read // => it will show the option readFile Sync

//const {readFileSync, writeFileSync}= require('fs') // now we destructure both now i am gonna setup both of them
// 
//// after manipulating content lets see how we can read from file system
//const first = readFileSync('../content/first.txt', 'utf8') // its a method so we need to provide two parameter and a path to that specfic path as well as what is the encoding so the node knows how to decode file => just go with utf8s as 2nd parameter
//const second =readFileSync('../content/second.txt', 'utf8')
//   
//console.log(first,second);// thishappend bcz of readFileSync
//
//// Now we have both text files now why dont we create new text files for which i needed writeFileSync(for which we provide two values two arguments one in which is file name and if the file is not there then of course node will create that file and you will see that in a second and the second one is the vakue that we wanna pass )
//
//writeFileSync('../content/result-sync.txt',`Here is the result : ${first}, ${second}`, // fumctionalty
// {flag: 'a'}) 

// now if the file is not there node will create a new filen and if the file is already their node by default overright the file

// now if you want to append the file just pass in one more argument i have the fird]st i have the value that i would like to setup and third one is an object basically an object an options object and here the property name is flag which is an option now it will overright the file


////////// ACTUALL PROBLEN OF CREATING SAME MDOULE FOLDER
/*

The Problem
In your terminal, you are inside the folder:
D:\BACKEND\Fs_Module(Sync)\

In your code, you are asking Node to find:
./content/first.txt

However, looking at your file explorer on the left, the content folder is not inside Fs_Module(Sync). It appears to be one level up, or at least in a different directory tree than where app.js is currently sitting.

*/


///////// MISTAKE 
//const second =readFileSync('./content/second.txt', 'utf8') THIS IS WRONG ITS ACTUALLY IN THE SUBFODER SAME FOR THE 2ND LINE
//const first = readFileSync('./content subfolder/first.txt', 'utf8')
//const second = readFileSync('./content subfolder/second.txt', 'utf8')
// NOW ITS WRITE



///////////////// SUMMARY 
/*

HERE WE HAVE TWO USEFUL METHODS =>
1> FOR READING FILES 
2> FOR CREATE FILE

=> BOTH FROM SCRATCH

*/

/**
 Functionality in one line:

{ flag: 'a' } makes Node.js add new data to the end of a file instead of replacing its existing content.

Even simpler:

Functionality = the purpose or behavior of a feature

Feature → flag: 'a'
Functionality → it appends data instead of overwriting
 */

const {readFileSync,writeFileSync} =("fs")

const first =readFileSync('../content/first.txt','utf8')
const second=readFileSync('../content/second.txt','utf8')

console.log(first,second);

const result=writeFileSync('..content/result-sync.txt', `here is ${first} and ${second} result`,{flag:'a'})
