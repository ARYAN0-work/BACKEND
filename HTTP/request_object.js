// ITS IS A GIANT OBJECT

// for now i am assuming that the user is just trying to do is they just want to get the resource from our server so thats 

const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log(req); provide a large object
    //console.log(req.method);// give get => so the user is performing get request
    //console.log(req.url);// user is trying to access the resource by the name of contact and if of course the resource is there awesome we send something if we domnt then 404 will come and fo 5000 theres a signak that we are getting the home page , so forward slash is gonna be the hoime page
    
    const url = req.url;
    // home page
    if (url === '/') {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>about page </h1>')
    res.end() 
    }
    // about page 
    else if (url === '/about') { // now actually we saying your resoce we cant find that thaty why 404
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>page not found</h1>')
    res.end() 
    }
    else{

    }
})

server.listen(5000)

// this will just mean that it is a homepage and whatever comes after the homepage well thats the resource that the user is tryiong to acess and now of course we can set a if statment about it is a homepage or not you can set it to propery also like see line 12

// we can also add the status code= status message 