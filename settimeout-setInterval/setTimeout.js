function myTimeout(callback, delay, ...args) {
  let clear = false;
  const start = Date.now();

  function inner() {
    if (clear) return;
    const elapsed = Date.now() - start;
    if (elapsed >= delay) {
      callback(...args);
      clearInterval(intervalId);
    }
  }

  const intervalId = setInterval(() => {
    inner();
  }, 100);

  return {
    clear: () => {
      clearInterval(intervalId);
      clear = true;
    },
  };
}

const callback = (args) => console.log("proper time passed, args: " + args);

const timeout = myTimeout(callback, 2000, "meow");

setTimeout(() => {
  const { clear } = timeout;
  clear();
  console.log("cleared");
}, 1000);

// code below did not worked because of diffrent instances
// setTimeout(() => {
//   const { clear } = myTimeout();
//   clear();
//   console.log("cleared");
// }, 1000);
