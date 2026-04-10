// how you include the exported file 
//const names =require('./firstModule')// always start with . but if the module is 2 level up or 3 level up use ..
//console.log(names);
// now that secret one is only accesed to that file not any file and jhon, peter are accesed to these files
// we can do the same thing in 


// now the main question is this app[firstModule,irstmodule1,app.js] gonna run or break its obuious ts gonna bresak bcz no connection
// bcz no connection in files for connection see 4.mname.js

//sayHi('susan')
//sayHi(john)
//sayHi(peter)c

// +++++++++++++++++++++ 1st export +++++++++++++

//=>when modules are two level up or three level up use .. or ... => bcz theres third party modules and built in modules

const fn = require('./5-utils')
const name = require('./4-name')
// as a parameter we need to pass where the data is coming from=> where module is located// wrong
console.log(fn);//// it will give a object jhon jhon peter peter
// notice secret is now only for this file

// +++++++++++++++++++++ 2nd export ++++++++++++++



const sayHi = require('./5-utils')// its a js file so we simply omit the extension as long the file name matches

//sayHi('susan')
//sayHi(john)
//sayHi(peter)
// & it will give error = john isnt defined ; actusl problem john is sitting in the names right => so you can either destructure it or go with property names 

sayHi('susan')
sayHi(name.john)
sayHi(name.peter)

//SUMMARY

// => so the main idea is every file is a default module and then when it comes to a module we are in charge what we are sharing and in order to export or make it something available from this module we go with module exports and then we just set up the functionality whether this is going to be a aobject that we are exporting 


// ok so theres a lot to learn from here destructure it daily