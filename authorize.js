const authorize = (res,req,next)=>{
    // seting up a specfic query string 
    const {user} = req.query;
    if (user === 'john') {
        req.user = {name:'john',id:3}
        next()// if i dont write this whole program is gonna crash 


        // this is just demonstration normally what you're going to do you'll check for json web token and then if token exists then we communicate with database and actually get the user again this is coming up
    }
    else{
        res.status(401).send('unauthorized')
    }
    //console.log('authorize');
    //next()
}

module.exports = authorize