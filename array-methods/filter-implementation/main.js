Array.prototype.myFilter = function (callback) {
  let result = [];

  for (i = 0; i < this.length; i++) {
    if (callback(this[i])) result.push(this[i]);
  }

  return result;
};

let arr = [2, 5, 20, 5, 7, 13];

arr = arr.myFilter((item) => item > 7);
console.log(arr);
