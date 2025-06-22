/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  let str = "";
  const result = [];
  const array = Array.from(s);
  array.forEach((el, index) => {
    str += el;
    if ((index + 1) % k === 0) {
      result.push(str);
      str = "";
    }
    if (index === array.length - 1 && str.length != 0 && str.length < k) {
      for (let i = str.length; i < k; i++) {
        str += fill;
      }
      result.push(str);
    }
  });
  return result;
};

// divideString("abcdefghi", 3, "x");
divideString("abcdefghij", 3, "x");
