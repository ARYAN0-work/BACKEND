// OS MODULE
// -> it provide many propeties ti interact with os and server

// the genral module setup =>

const os = require('os')// since its a built in module we didnt need to install anything rembeber when we work with external ones yes we are gonna need it , we have to install the module first- notice we dont go with ./ now we are are gonna have methods just by running this

//os. just by writing this we are gonna have damn too many methods

// info about current user we can get which is me
const user = os.userInfo()
console.log(user); // just invoke it you will get info

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)// there are many methods too invoke the mothod not always store in the variable

// an onject which shows other method => this data is about os = these is just scratch or surface level

const currentOS ={
    name:os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOS)

