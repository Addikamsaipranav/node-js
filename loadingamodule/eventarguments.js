const EventEmitter= require('events');

const emitter = new EventEmitter();

emitter.addListener('messageLogged',(arg)=>{
    console.log(arg.id)
    console.log(arg)
})

emitter.emit('messageLogged',{
    id:1,
    url:'http://'
});

// when we raise an event we need to send some data abt that event 

// we can add event argument as id ,url;

// here event arguments are nothing but data which we send when an event raising 

// here messageLogged event is raised and data is been passed as an object 

// this object can used as parameter in listener function 

// i named that parameter as arg and arg refers to the data object which is been raised by event
