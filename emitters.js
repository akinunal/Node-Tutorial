const EventEmitter = require('events');
const logEvents = require('./logEvents');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit('log', 'Log event emitted!');
}, 2000);