// now the main question is this app[firstModule,irstmodule1,app.js] gonna run or break its obuious ts gonna bresak bcz no connection

// => here we have two modyules 

//=> but you can console.log in the app js bcz its a file so by default it is a module 

//local
const secret ='SUPER SECRET'
//share
const john = 'john'
const peter = 'peter'

console.log(module);// now we have a object having prop intresting => 

    // EXPORTS[IT IS AN OBJECT]
    // - now where we dump export we can connect those file => and also we are only sharing the minimum  

module.exports = {john,peter} // => now in order to share them we need require
