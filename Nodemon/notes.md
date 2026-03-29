it is the dependcy of node modules and pakage.json

- we can istall it as simple dependcy and dev dependcy for that run npm i nodemon -D or --save-dev

- do we really need it in production na bcz when we push to diditalocean or horekou it will help to restart[more serious]

- we use when we crate an app and when we it is in production we are gonna only share the code

- we can also setup the command and we just provide a value for ex- npm start

- just write this in script => "start: "node app.js" - npm run start

- but for somr of them you have to provide npm run nameofCommand add this in script "dev": "nodemon aap.js" -npm run dev when you do this and maipulate app.js it will restart the app bcz of nodemon 

## SUMMARY

- nodemon restarts the app and setitup as script