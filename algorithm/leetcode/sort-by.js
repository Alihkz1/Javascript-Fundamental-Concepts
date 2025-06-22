/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return [...arr].sort((a, b) => fn(a) - fn(b));
};
const arr1 = [{ x: 1 }, { x: 0 }, { x: -1 }];
const fn1 = (d) => d.x;
const sortedValue1 = sortBy(arr1, fn1);
console.log(sortedValue1);

const arr2 = [
  [3, 4],
  [5, 2],
  [10, 1],
];
const fn2 = (x) => x[1];
const sortedValue2 = sortBy(arr2, fn2);
console.log(sortedValue2);
