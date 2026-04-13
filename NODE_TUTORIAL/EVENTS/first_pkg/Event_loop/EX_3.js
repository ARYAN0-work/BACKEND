setInterval(()=>{// setinterval[it runs in ioncrements= in every 2 sec it is invoking the callback] is aynchronus 
    console.log('hello world');  
},2000)
console.log('I will run first');
// process stays alive unless
// Kill Process CPNTROL + C
// unexpected error