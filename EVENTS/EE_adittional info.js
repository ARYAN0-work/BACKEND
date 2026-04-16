//++++++++++++++ ADDITIONAL INFO

// 1.we can many methods as much as we want


const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{ 
    console.log(`data recived`);
})

customEmitter.on('response',()=>{ 
    console.log(`same other logic here`);
})


customEmitter.emit('response')

// 2. the order matters=>if i do this it doesnt make sense

/*
customEmitter.emit('response')

customEmitter.on('response',()=>{ 
    console.log(`data recived`);
})

customEmitter.on('response',()=>{ 
    console.log(`same other logic here`);
})

*/

// 3. we can pass the arguments while omitting the event so for ex=> i go here with my emit i pass in the name which is of course response and i can pass more argumenst


customEmitter.on('response',(name,id)=>{ // now in that callback fn acss those paramether as callback 
    console.log(`data recived user ${name} with id: ${id}`);
})

customEmitter.emit('response','john',34)