/*


GET               api/tasks     -get all tasks           
POST              api/tasks     -create task
GET               api/tasks/:id  - get task
PUT/PATCH         api/tasks/:id  -  update task
DELETE            api/tasks/:id  - delete task


*/

// before starting set-up our data base - lets taslk about routes more speciffically why we use such structure => its bcz we are building a rest api and since these days the term api is used much for everything lets just all agree in our case since we're building a server essentially we want to create a http interface so the other apps most likely front end ones can interact with our data thats how we view api in this scenario and when it comes too rest it stands for representional state transfer and argubaly the most popular api design pattern bcz it combine http verbs route path and our data so effectivly rest determines how api looks like 

// just make a pattern and stick with it 

// explation and then json is a commone method format for reciving and sending data in rest api we'll use that approch as well  so even though as the  moment we use send method we will eventually switch to json method instead 

// also rest in genrall is somewhat fuzzy in fact often times you'll deviate from staright up rest since thats what the setup will require 

// since our api allow to perform crot operation on our data - create read update destroy : common approch at which api is built on crud it usualy made when user or app want to perform crud on a a given data in our case its task