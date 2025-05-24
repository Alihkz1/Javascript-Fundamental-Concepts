function timed(fn) {
  return function (...args) {
    console.log(`Entering function ${fn.name}`);
    let startTime = Date.now();
    try {
      return fn(...args);
    } finally {
      console.log(
        `Exiting function ${fn.name} after ${Date.now() - startTime}ms`
      );
    }
  };
}

function benchmark(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  return sum;
}

const value = timed(benchmark)(1000000000);
console.log(value);
