function sum(...args) {
  // rest: dynamic arg count for a function
  return args.reduce((t, cur) => (t += cur));
}

console.log(sum(2, 4, 5, 6, 3, 1));
console.log(sum(2, 4));
console.log(sum(2, 4, 5, 6, 3, 1, 1000));

const nums = [32, 54, 11];
const v = sum(...nums); // this is spread
console.log(v);