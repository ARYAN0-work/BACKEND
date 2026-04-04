var http = require('http')
var fs = require('fs')

http
  .createServer(function(req,res){
      //const text = fs.readFileSync('../content/big.txt','utf8')
      //res.end(text)
      // when you look at the network in inspect on localhost/5000 it will show you a data 1.8mb which is not good bcz you are sending a large chunks of data

      const fileStream =fs.createReadStream('../content/big.txt','utf8');
      fileStream.on('open',()=>{
         fileStream.pipe() // pipe method so we can go to the file stream its pushing from read stream into right stream => which means you can read and ride data in chuncks
     }) ;
      fileStream.on('error',(err)=>{
         res.end(err) 
    })
    // HERE WE ARE DOING THINGS WITH THE HELP OF PIPE METHOD
  })
  .listen(5000)


  // IT HEPLS TO DO THINGS WITH DATA IN CHUNKS