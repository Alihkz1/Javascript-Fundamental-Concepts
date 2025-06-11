/**
 * @param {number[]} numbers
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (numbers, fn, init) {
  if (!numbers.length) return init;
  let result = init;
  numbers.forEach((item, i) => {
    result = fn(i === 0 ? init : result, item);
  });
  return result;
};
