function myInterval(callback, delay, ...args) {
  let start = Date.now();

  function inner() {
    const loopTime = Date.now() - start >= delay;
    if (loopTime) {
      callback(...args);
      start = Date.now();
    }
  }

  inner();
}

myInterval(() => {
  console.log(2);
}, 2000);
