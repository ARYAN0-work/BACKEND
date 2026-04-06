// now we revised how to create a server the problem in that setup is we dont provide any data so we dont have any metadata about the body that we are sending out so we are not providing any information we just go res.end and then oass in the string so thats the issue no. 1 , the 2nd one is that we go tolocalhost5000 or localhost500about or localhost5000conatct we get the same response every time

//=> issue no.1 more info = more data
//res.writeHead= we are providing header[metadata about our response and we gi here with res dot and then we go with right head so right head and then we need to provude status code ]

// writehead - hi so we are sending back html or css or where im sending so the broweser knows well what to do howto render that content and like i mentioned already previously this is done using key value pairs so go with content type ---

// res.end(data,encoding)

const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})//text/plain no html will be used and it will shown onscreen as it is written & also this stauts codes matter i mean each ststaus code havbe a meaning 200= ok[request has succeded], 400[bad request] =also use write status code bcz on brower inspect network it will give you a hint how does it affect our response


    // only remebr => you are decribing to browser what are you sending back image html css and if you change mime type brower will chang that content type header yes the browser will intrept that diffrently and once we succsefully have more proper response 
    res.write('<h1>home page</h1>')
    res.end()/// you can directly pass into res.end
})

server.listen(5000)