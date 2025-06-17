/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let result = [];
  arr.forEach((el, i) => {
    result[i] = fn(el, i);
  });
  return result;
};
