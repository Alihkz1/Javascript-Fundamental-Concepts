class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.get(eventName)) this.events.set(eventName, []);
    const callbacks = this.events.get(eventName);
    callbacks.push(callback);
    return {
      unsubscribe: () => {
        const index = callbacks.indexOf(callback);
        if (index != -1) callbacks.splice(index, 1);
        if (callbacks.length === 0) this.events.delete(eventName);
      },
    };
  }

  emit(eventName, args = []) {
    if (!this.events.has(eventName)) return [];
    const callbacks = this.events.get(eventName);
    return callbacks.map((cb) => cb(...args));
  }
}

const emitter = new EventEmitter();
const sub = emitter.subscribe("onClick", () => {
  return 99;
});
emitter.emit("onClick"); // [99]
sub.unsubscribe(); // undefined
emitter.emit("onClick"); // []
