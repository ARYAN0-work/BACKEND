// during fs module we have two flavour synchronus one and asynchrounus one and asynchnous one is great while we are not blocking the event loop the prob is well if we are using the callback approch it will get messy preety quickly => now in this we are studying the alternative


// => heres the code which will show you to block the event loop

const http =require('http')//  requing for http module

const server = http.createServer((req,res)=> { // we create callback and we passed two objects res and req



    // now checking on morw then one url now using on diffrent resource we are still blocked by other user if he or she is requesting some kind of resource where we have the blocking code 
    if (res.url === '/') {
        res.end('HOME PAGE')
    }

    // now if i setup a blocking code[could be nested for loop]
    if (res.url === '/About') {
       //BLOCKING CODE
       for (let i = 0; i < i<1000; i++) {
        for (let j = 0; j < 1000; j++) {
           console.log(`${i},${j}`);
           
            
        }
/*
now you would expect that only the user her will get blocked nop but the other people are also blicked who are trying to get on the url now only when the site runs these two will get the no.s agin
*/         




       }
    }
    res.end('Error Page')
})

server.listen(5000,()=>{//the port we want to listen on
    console.log('Server listening on port: 5000...');
})

// it shows why we prefer async and in the next topic itr will we fixed