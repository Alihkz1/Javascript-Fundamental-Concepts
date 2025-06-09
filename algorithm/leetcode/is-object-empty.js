/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // true if obj or array is empty
  if (typeof obj == "object") {
    return Object.keys(obj).length === 0;
  } else {
    return obj.length === 0;
  }
};
