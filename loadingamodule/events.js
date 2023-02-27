//one of the core concept in node is events 
// event is basically a signal that indicates something happen in the application 

// in node we have http class , where we use to build web server 
// here we listen on given port lets say eg 3000
// every time we recieve a request on port , that http class raises an event 
// our job  is to reading that request from event and to respond


// class event emittor 
// here event emitter is not a function its a class
const EventEmitter = require('events')
// class is like human ,
//object is like actual instance of human
// so we need to create an instance of it 
const emittor = new EventEmitter();
// emittor is an actual object of eventemittor class

//emit method is to raise an event 
//emit == making a noise , produce some thing 


emittor.addListener('messageLogged',()=>{
    console.log("LISTENER CALLED")
})
emittor.emit('messageLogged')
// listener to be there to respond for an event

//explanation : 
// actually emit event is been registering from emittor object 
// to check wheather that emittor event is been raised or not 
// we need to have a listener , therefore we are using addListener function , we have some other options for it
// on() too 
// both on() and addListener() working is same 
// it will take an two arguments one is name of event and a function 