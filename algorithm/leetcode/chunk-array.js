/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const result = [];
  let temp = [];
  arr.forEach((item, index) => {
    temp.push(item);
    if (index + 1 >= size && (index + 1) % size === 0) {
      result.push(temp);
      temp = [];
    }
    if (temp.length && index === arr.length - 1) {
      result.push(temp);
    }
  });
  return result;
};

const result = chunk([1, 2, 3, 4, 5], 1);
const result2 = chunk([1, 9, 6, 3, 2], 3);
const result3 = chunk([8, 5, 3, 2, 6], 6);
const result4 = chunk([], 1);
const result5 = chunk([1, 2, 3], 2);
console.log(result5);
