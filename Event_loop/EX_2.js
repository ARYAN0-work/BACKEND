// started operating system process
console.log('first');
setTimeout(()=>{
    console.log('second');
},0)
console.log('third');
// completed and exited operating system process


// here 0 sec so it should be print immediatly[na] bcz setTimeout is asynchronus[which means its fgonna get offload]