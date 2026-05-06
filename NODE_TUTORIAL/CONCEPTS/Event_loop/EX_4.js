const http =require('http')

const server = http.createServer((req,res)=> {
    console.log('request event');
    res.end('Hello World')
})

server.listen(5000,()=>{// listen is async
    console.log('Server listening on port: 5000...');
})

// do this from 