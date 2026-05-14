/*
nosqul , non relational DB
store JSON
easy to get started
free cloud hosting - ATLAS

*/

// we made connection to our database by creating a array maniupulating it and sending the manipulated array so this time we are gonna connect to proper database its not a proper approch 

// here in traditional database where you have rows and columns here you can store everything as json only and it basically didnt care how data relate to each other intead of tables we have collection which represnt group of item and instead of rows we have docs which represnt single item and a doc is a set of key value pairs

// data part in mongo => start creating docs 

//whenever we talk about monogdb we'll have the database so that essentially is going to be that application again in our case eventually this will be the task manager one and then insisde of that database we'll have collection now if you're familiar with regular database you can think of them as tables and in our collection we'll have group of mongodb docs so if i name my one products you can probably already guess that here i'll have list of products you can already guess that here i'll have list of products and and if i decide that my store will also have users of course i can go here and create a new collection and and as a  quick note we wont have to do this manually its just a genral setup 

// and during insert doc -> it represent one single item
// and its js object effectivly its a key value pair 

// during creation we are gonna have a unique id then setup a type for the item => now not only we have product collection but i also have my first item my first document and here comes the biggest gotcha in mongodb docs have a dynamic schema and what means in plain english is simple fact that docs in the same collection dont need to have the same set of fields or the structure so if i were to go to insert doc and instead of string i'm going to go with array and i'm going to call this colors and then i'll set my first one to be red then second one blue and if i'll save it as far as mongodb is conecrened they're still the same items in this product collection so nothing stops you from doing that now just bcz you can doesn't mean you should and therefore we will use additional library by name of mongoose which we will setup that for structure as far as straight up mongodb yes both of these docs are still part of this product collection even though structure might be totally diffrent 