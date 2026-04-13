// CALLBACK HELL


// we are here gonna use readfilde method

const {readFile,  writeFile}= require('fs') 

//=> for synchronus you need to provide a callback which means we run callback when we are done so when whatever functionalty weare doing is complete then we run that callback normally would do with add event listner to a button

//=> callback fn will everytime run when we click on the btn so this is the same thing

// we use readfile fn then we str it and provide path and then second argument which is callback fn and in that callback fn we provide more arguments in which first one is error if there is one as well as the result and then insde of the body first i would want to check if there is an error and then i can just return null as well as maybe console.log and if every thing is coorect i am gonna have acces to my data  |  parameter name result and this is where you setup the functinalty

readFile('../content/first.txt',(err,result)=>{
    if (err) {
        console.log(err);
        return
    }
    console.log(result);// it will return a buffer bcz we didnt add utf8 
})


readFile('../content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return
    }
    console.log(result);// it will return a buffer bcz we didnt add utf8(encoding) 
})

//=> now the quest how we can setup same functionalty
// we have read file  and then we simply create a new file with both of these values if youre familiar with callbacks you know you have to setup this parameters insidde of the calllback where i am gettijg this result

// => now i am gonna assign it some variable then i would want to read tat second file and then eventually once i read the 2nd file then of course i would want to create that new file and the way its goping to look like  =>


//=> this is the case  where we are checking for the error first if there is an error we cancol.log it and if everything is successfull we assign this one to the second one and then eventually i want to set up my right file => gonna use writefile and ori=ovude the value we already have result sync txt that why we wiill create new one
readFile('../content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return   ///// omiting the result
    }
    const first = result;
    readFile('../content/second.txt','utf8',(err,result)=>{

        const second = result; 

    writeFile('../content/result-async.txt',
       `Here is the result : ${first}, ${second}`// the reaon why i acess to firrst and second is we are looking outside of this callback fn 
    ,(err,result)=>{// inside of this callback we can finally look at the value
     if (err) {
        console.log(err);
        return// if theres error return err
     }
     console.log(result)// if everything correct console.log result
    })// making the callback having error and result
/*
result is usually undefined (writeFile doesn’t return data)
⚠️ Important observation (your comment)

You wrote:

// result will be undefined...

✅ Correct — because:

writeFile only writes data
It does NOT return anything useful
🔗 Flow in simple words

👉 Your code is doing this:

Read first file
After that → read second file
After that → create new file with both contents

*/
    })// result will be undefined bcz we are not expecting anything back but we git a file result-async.xt
})    

/* CALL BACK HELL

Scope: Each readFile has its own callback function.

Variable Naming: You used the name result for the arguments in both callbacks. While the inner function can see first (because it's in the outer scope), it won't automatically know that the second result should be called second unless you explicitly assign it.

*/