Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    // accumulator += this[i]; bad way -> can not handle array initialValue or objects
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

const numbers = [1, 523, 63, 75, 1];
const result = numbers.myReduce((acc, curr) => {
  acc.push("0000" + curr + "---");
  return acc;
}, []);

console.log(result);
