const logEvent = require('./logEvent')



const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  logEvent(msg)
});
myEmitter.emit('log','log event manager');

