/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const result = [];
  function inner(anArray, anLevel) {
    if (anLevel > n) {
      result.push(anArray);
      return;
    }
    for (let i = 0; i < anArray.length; i++) {
      if (typeof anArray[i] === "number") result.push(anArray[i]);
      else {
        inner(anArray[i], anLevel + 1);
      }
    }
  }
  inner(arr, 0);
  return result;
};

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 1;

console.log(flat(arr, n));
