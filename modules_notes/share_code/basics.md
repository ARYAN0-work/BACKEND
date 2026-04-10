## why having pkg.json is so crucial when we shjare our file with other devlopres

- actually its more about git and github only send the code to github not the node modules bcz of size

-create a .gitignore[which files are gonna be ignored by source control] which they will ignored by my source control and i wont be pushing

=> after .gitignore it stopped tracking but see that in my app.js well techincally i'm using the load as a dependency right but we didnt push up the node modules => means the actual prob is if someone clone the file how without node modules its gonna run bcz this depency is neededs

//////// SOLN 

- if we have pkg.josn just run npm install => pkg.json will check the depency and automatically goona setup the node_module

=> the point is just push the code no node_modules