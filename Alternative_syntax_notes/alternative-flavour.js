//ok now we have two flavour is you want to export one value and the second one is we want to export more then one value we will do that with the help of object 

// => difrren6 datatype here so we dont think we can only export variable and objects

// now here we have two options


//++++++++++++  OPTION 1

//i simpily go with modules export an then whatever is the name and then ia am going to keep the items 

module.exports.items = ['item1','item2']
const person ={
    name:'bob',
}


//++++++++++++ OPTION 2
module.exports.singlePerson = person 
// WHY
//=>  in the previous video when we console.log module.exports it was an objectwe are setting a property on that object and set it ti equal to an array 