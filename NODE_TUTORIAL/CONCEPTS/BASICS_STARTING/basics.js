// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS) /// cover most of the
// module - info about current module (file) /// cover most of the
// process - info about env where the program is being executed // very imppppp => it gives about the info about the program where is excuted

//=> based on your enviourment you can make bunch of diffrent application

console.log(__dirname);

// in vanialla js we have 
// set interval nd set timeout

setInterval(()=> {
    console.log('hello world');
},1000)

// now hello world prints every 1 sec

setInterval(()=>{
    console.log('hello world');
},1000)


/*
setInterval(function, delay)
function → the code you want to run
delay → time in milliseconds (1000 ms = 1 second)


setInterval(() => {

   // setInterval is a built-in function in JavaScript that runs a piece of code repeatedly after a fixed time interval.


  console.log("Hello every 2 seconds");
}, 2000);

👉 This will print:

Hello every 2 seconds
Hello every 2 seconds
Hello every 2 seconds
...

every 2 seconds continuously.
*/