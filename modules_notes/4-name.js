// => here we have two modules 

//=> but you can console.log in the app js bcz its a file so by default it is a module 

//local=> no share bcz no exprort soits private nobody knows about it
const secret ='SUPER SECRET'
//share => i want to shsare it
const john = 'john'
const peter = 'peter'

console.log(module);// now we have a object having prop intresting => 
    // EXPORTS[IT IS AN OBJECT]
    // - now where we dump export we can connect those file => and also we are only sharing the minimum  

module.exports = {john,peter} // => now in order to share them we need require
//=> its an es6 syntax since key and value are same