const events = require('events');
const eventEmitter = new events.EventEmitter();

// eventEmitter.on('speak', () => {
//     console.log("Speaking...");
// })

// eventEmitter.emit('speak');


let handleConnect = () => {
    console.log("Connecting...");
    eventEmitter.emit('listen');
}

let handleListen = () => {
    console.log("Listening...");
}

eventEmitter.on('connect', handleConnect);
eventEmitter.on('listen', handleListen);

eventEmitter.emit('connect');