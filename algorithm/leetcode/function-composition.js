/**
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function (functions) {
  return function (x) {
    let result = x;
    functions.reverse().forEach((func) => {
      result = func(result);
    });
    return result;
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
const result = fn(4);
console.log(result);
