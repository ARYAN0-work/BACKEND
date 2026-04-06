// more complex setup => mind grenade 

/*
we are not limited to pasing in the html directly into the dot right or that end meaning imagine if youwould have to every time  just set it up or your htm in methods directky of course we can do that intead is set up the file require the file using the file system and then just pass it in now keep in mind one thing through where we will be passing in the contents of the file not the file itself and thats very imp we will be passimg in the content  of the file so that means we still need t use this content type just bcz we are going to be getting the data from the html file doesnt really mean anything more prefferable is html file
*/




// we are using readfilesync bcz we are noot invoking it each and every time someone comes to server please keeep in mind that we require that we require that  the file when we instantiate our server when the server starts running

const http = require('http')
const { readFileSync } = require('fs')

//get all files
const homepage = readFileSync('./index.html')

const server = http.createServer((req,res)=>{
   
    //console.log(req.method);
    const url = req.url;
    // home page
    if (url === '/') {
    res.writeHead(200,{'content-type':'text/html'})// change to 'text/plain' see magic
    res.write(homepage)
    res.end() 
    }
    // about page 
    else if (url === '/about') { 
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>about page</h1>')
    res.end() 
    }
    else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>page not found</h1>')
    res.end() 
    }
})

server.listen(5000)