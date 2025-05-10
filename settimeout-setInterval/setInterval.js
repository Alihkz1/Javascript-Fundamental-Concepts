function myInterval(callback, delay, ...args) {
  let start = Date.now();
  let timeoutId;
  function inner() {
    const loopTime = Date.now() - start >= delay;
    if (loopTime) {
      callback(...args);
      start = Date.now();
    }
    timeoutId = setTimeout(() => {
      inner();
    }, 1);
  }

  inner();

  return {
    clear: () => clearInterval(timeoutId),
  };
}

const start = Date.now();
const interval = myInterval(() => {
  console.log(Date.now() - start);
  // const { clear } = interval.clear();
  // if (Date.now() - start > 6000) clear();
}, 2000);
