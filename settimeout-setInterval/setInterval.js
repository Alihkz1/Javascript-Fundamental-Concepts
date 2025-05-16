function myInterval(callback, delay, ...args) {
  let start = Date.now();
  let timeoutId;

  function inner() {
    const loopTime = Date.now() - start >= delay;
    if (loopTime) {
      callback(...args);
      start = Date.now();
    }
    // timeoutId = setTimeout(() => {
    //   inner();
    // }, 1); refactored:
    timeoutId = setTimeout(inner, 1);
  }
  
  inner();

  return {
    clear: () => clearTimeout(timeoutId),
  };
}

const start = Date.now();
const interval = myInterval(() => {
  const elapsed = Date.now() - start;
  console.log(elapsed);
  if (elapsed > 4000) interval.clear();
}, 2000);
