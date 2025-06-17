/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let counter = 0;
  return function (...args) {
    counter++;
    return counter === 1 ? fn(...args) : undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));
