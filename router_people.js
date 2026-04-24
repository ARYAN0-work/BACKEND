// as you can see we're having more routes and more functionalty we have another issue and that issue of course is the fact that our app.js is getting quite  busy and techinacally we dont even have that many routes so what is the soln => usong express roiter those routes together and then as fas as functionalyy and actually set them up as seprators controllers now eventually in the next example when we work with database i'll cover again the common setup which is called mvc basically its a pattern its nit a rule but it is a nicely used pattern when youre setting up the api but we are missing the model part in the mvc oattern bcz we havent connected the database so just leave it as at that just plz keep in mind whether i'm about to show you in the video and in the next yes it is a preetu common convention and pattern so i also suggest sticking to that now also i want to 

// notice we have one route for login but then rest i have api people , api people postman , api people id => if i could somehow group all the api people and also add one for the login but basically in a seprate file 

const express = require('express')
const app = express()

const people = require('./routes')

//static assets
app.use(express.static('./methods-public')) 
// parse form data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

app.use('/api/people',people)// use base router 


// we havee a problem that we have already have a base for our router in app js where we have api people 
app.post('/login',(req,res)=>{
    const {name} = req.body
    if (name) {
        return res.status(200).send(`welcosme ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
    
})
// so noiw do the same with login 

