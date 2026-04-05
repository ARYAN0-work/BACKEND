// allow us to interact with file path easily

//const { log } = require('console'); 
const path = require('path')
//
console.log(path.sep);// seprator property my returns platform related seprator


const filePath = path.join('/content', 'subfolder', 'test.txt') // join method which joins a sequence of path segments using that platform using that platform specfic seprator as the limiter and 2nd this is it returns a normalized resulting path => notice we go in a sequence

console.log(filePath)

const base = path.basename(filePath) // we can also gget the base name
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');// we can access  absolute path and once in a whikle we need to provide that absolute path thats why we have to use that ,method and we come to path.resolve it accept a sequence of paths or paths segment and resolve it into an absolute path
console.log(absolute);// we need this bcz our app is gonna run in diffrent enviourments right so ofcourse the path is some kind of resource is going to be diffrent in my compiuter in my local machine


