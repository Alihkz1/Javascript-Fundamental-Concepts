class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(eventName, callback) {
    if (!this.subscribers[eventName]) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName].push(callback);
  }

  unsubscribe(eventName, callback) {
    this.subscribers[eventName] = this.subscribers[eventName].filter(
      (fn) => fn !== callback
    );
  }

  publish(eventName, data) {
    if (!this.subscribers[eventName]) return;
    this.subscribers[eventName].forEach((callback) => callback(data));
  }
}

// Usage
const pubsub = new PubSub();

function listener(data) {
  console.log("Received:", data);
}

pubsub.subscribe("message", listener);
pubsub.publish("message", "Hello observers!");
pubsub.unsubscribe("message", listener);
pubsub.publish("message", "This won't be seen");
