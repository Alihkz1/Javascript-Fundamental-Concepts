/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let modifying = init;
  return {
    increment: () => ++modifying, // Pre-increment: increments first, then returns
    decrement: () => --modifying, // Pre-increment: increments first, then returns
    reset: () => (modifying = init),
  };
};

// return modifying++; // Post-increment: returns first, then increments

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

let val = 4;
console.log(val++); // logs 4 -> then increments val
