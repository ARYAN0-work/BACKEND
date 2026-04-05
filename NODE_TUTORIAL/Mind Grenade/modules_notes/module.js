// this whole code is made in combined three files app, utils, name .js 
// app.js is the main file



// CommonJS , every file is module (by default ) /node => uses common js and every file in node is a module
// MODULES[enscapulated code => only sharing what we want]

//=> we are gonna build complex  app which tells us we need modules 
//=> es6 module in react/vaniall js => use same logic
const secret ='SUPER SECRET'// we can use this variable anywhere in file
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {// we made a fn passed name as parameter
    console.log(`Hello there ${name}`);
}

// invkoing the fn
sayHi('susan')
sayHi(john)
sayHi(peter)

// => now it wouldnyt make sense if name fn or future fn are seprate it will give more structure

//=> First module