const isEven = (x) => x % 2 === 0;
const data = [1, 3, 5, 6];

function not(fn) {
  return function (...innerArgs) {
    const result = fn.apply(this, innerArgs);
    return !result;
  };
}

const isOdd = not(isEven);
const allAreOdd = data.every(isOdd);
console.log(allAreOdd);
