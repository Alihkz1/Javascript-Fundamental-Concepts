/**
 * @param {Function} fn
 * @return {Object}
 */
// Array.prototype.groupBy = function (fn) {
//   const extractedKeys = new Set(this.map((el) => fn(el)));
//   const result = {};
//   extractedKeys.forEach((key) => {
//     result[key] = this.filter((item) => fn(item) == key);
//   });
//   return result;
// };

Array.prototype.groupBy = function (fn) {
  const result = {};
  for (const item of this) {
    const key = fn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
};

[1, 2, 3].groupBy(String); // {"1":[1],"2":[2],"3":[3]}
