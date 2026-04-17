// when we use sync or async approch its good but when thee file gets bigger and bigger it takes a lot of memory eventually the variable in which we store is not good enough you will get an error i mean the size is too big and you cannot place everything in the string so the soln is stream read option
/*
const {createReadStream} = require('fs')

const stream = createReadStream('../content/big.txt')

stream.on('data', (result)=>{// we want to listen for data 
    console.log(result);
}) 
*/
// when you run this you will get data in chuncks in termianl => like this 64kb 646kb => default the size of the buffer is about 64 kb however we can control it amd the way we can do is by paaing in the object when we are setting up create read stream so first argument is going to be the path which is again in my case is big text file i created and that pass the options object the [property] we are looking for that controls the size of the buffer has the name of the high water mark => now there will be two console logs one for 90 kb one will be remainder  and the  remiander our file is 169kb[pc my properties me jaake dekha]

// we can setup encoding and also we have eror event => just whang the path so you can learn err propety

const {createReadStream} = require('fs')

const stream = createReadStream('../content/big.txt',{
    highWaterMark:9000,
    encoding:'utf-8'
})

//default: 64kb
//lastbuffer - remainder
//highwatermarks- control size
// const stream = createreadstream('./content/big.txt',{highWaterMark:900})
// const streamStream('../conetnt/big.txt', {encoding: 'utf8'})

stream.on('data', (result)=>{
    console.log(result);
    
})