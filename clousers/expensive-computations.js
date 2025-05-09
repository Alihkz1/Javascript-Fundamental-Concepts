/* catching expensive computations */
const slowSquare = (x) => x * x;
function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (cache[arg]) return cache[arg];
    cache[arg] = fn(arg);
    return cache[arg];
  };
}
const fastSquare = memoize(slowSquare);
// console.log(fastSquare(2)); /* 2 is arg */
// console.log(fastSquare(2)); /* 2 is arg */
