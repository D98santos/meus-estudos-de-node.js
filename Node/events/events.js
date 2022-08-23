const EventEmitter = require('events')

class Event extends EventEmitter{}
const myEvent = new Event()


// .ON CREAT THE EVENT
myEvent.on('security', (x, y)=>{
    console.log(`Executando o evento 'security': ${x} ${y}`)
})

// .EMIT INVOKE THE EVENT
myEvent.emit('security', 'userAdmin','Alterou Salario')