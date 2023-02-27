const http = require('http');

// server event emittor 
// server is created 
const server = http.createServer((req,res)=>{
    if(req.url== '/'){
        res.write('Hello world')
        res.end()
    }
    if(req.url== '/api'){
        res.write(JSON.stringify([1,23,4]))
        res.end()
    }
});



// server.addListener('connection',(socket)=>{
//     console.log('new connection')
// })

server.listen(3000);

console.log('listening on port 3000')
//server will listen 3000 port 
//server raises an event 
// before listening add listener 