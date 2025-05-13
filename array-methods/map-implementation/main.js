Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) result.push(callback(this[i], i));
  }
  return result;
};

let myArray = [2, 4, 6];
myArray = myArray.myMap((item, i) => {
  return item * 2 + "99 meow";
});

console.log(myArray);
