 // setting our own events in node

const EventEmitter = require('events') // here variable is a class which we are assinging a events module\

// now if you want to create a custom event just extend the class or just want to emit an event as well as listen to it just create the instance

const customEmitter = new EventEmitter() // and thats how we invokde it and now we have the instance of our class so essentially we have the object

/*

TWO IMP METHODS

On:- listen for an event
emit:- emit an event

*/

// subscribing to event=>

customEmitter.on('response',()=>{ // in this mesthod we passed in a string where we say the name of the event now in my case i'll name any my one response and then of course once i have insibred in i also would pass in the call back 
    console.log(`data recived`);
})// now when we subscribed to specfic event now i would want to admit it and way we do that we just go with custom emitter and of course the moethod is emit and also the string[response] needs to match and just here response 


// emitting to an event
customEmitter.emit('response')






