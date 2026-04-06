// its for seeing the example of html_app


const http = require('http')
const { readFileSync } = require('fs')

//get all files
const homepage = readFileSync('./HTML_app/index.html')
const homeStyles = readFileSync('./HTML_app/styles.html')
const homeImage = readFileSync('./HTML_app/logo.html')
const homeLogic = readFileSync('./HTML_app/browser-app.html')

const server = http.createServer((req,res)=>{
   
    //console.log(req.method);
    const url = req.url;
    console.log(url);
    
    // home page
    if (url === '/') {
    res.writeHead(200,{'content-type':'text/html'})// change to 'text/plain' see magic
    res.write(homepage)
    res.end() 
    }
    // image/home
    else if (url === '/logo.svg') { 
    res.writeHead(200,{'content-type':'images/svg+xml'})
    res.write('<h1>about page</h1>')
    res.end() 
    }
    // styles
    else if (url === '/styles.css') { 
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles)
    res.end() 
    }// logic
    else if (url === '/about') { 
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeLogic)
    res.end() 
    }
    else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>page not found</h1>')
    res.end() 
    }
})

server.listen(5000)