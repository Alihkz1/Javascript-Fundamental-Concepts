const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();
emitter.emit("meow");
emitter.on("meow", () => {
  console.log("the meow event received!");
});
