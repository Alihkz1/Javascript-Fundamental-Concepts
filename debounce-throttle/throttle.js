function myThrottle(callback, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      callback.apply(this, args);
    }
  };
}

const final = myThrottle((printPhrase) => console.log(printPhrase), 2000);
final("init print");
final("init print");
final("init print");
final("init print");
final("init print");
setTimeout(() => {
  final("after timeout print");
}, 2000);
