// events are code building code for node bcz a lot of build in module rely on it

//=> server has the ablity to listen events

//const http = require('http')
//const server = http.createServer((req,res)=>{
// res.end('welcome')
//})

//Using Event Emitter API
const server = http.createServer()
//emits request event
// subscribe to it / listen for it / respond to it
server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)