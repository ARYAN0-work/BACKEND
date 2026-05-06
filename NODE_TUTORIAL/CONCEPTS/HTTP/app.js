// here the method we are are using is create server

const http = require('http');

const server = http.createServer((req,res)=>{ // this createserver method is looking for a callback & in that callback fn we provide two parameters are objects , common practice rec and res =>this first parameter represent request imagine a client is requesting from web brower to you webpage so you will have info about the method and all kind of useful stuff in that request stuff in that request stuff and the response is what we are sending back 

    res.write('Welcome to our homepage') // i am just concern about my res yet only later we will use req

    // now aswe send our response now i want toend my request
    res.end()

})

server.listen(5000)// here is the port what server is gonna listen to it another method and this no. is arbitary

// after running this we are not gonna exit bcz we have a web server abd what do web servers do they keep on listening to requests and actually you want your server4 to be on site go and search localhost 5000