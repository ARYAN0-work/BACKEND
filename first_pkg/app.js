// now using those modules

// this is the diffrence between node module and the one you install the external one

const _= require('lodash') // it have the method that effectivly will just spit this back as a flat array

const items =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)// we have acces to flattenDeep method bcz we install loadash dependcie
console.log(newItems);
console.log('hello '); // testing nodemon

// i manipulated pkg.json see two changes in script =>start and dev start casullay start app.js dev start the server with refrersh power i mean now we are using nodemon each and evry resfresh pe server restart with chabges toh ab hume baar baar node app.js nhi likhna padhega 

