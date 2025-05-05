function outer() {
  const outerValue = "im from outer";
  function inner() {
    // console.log(outerValue);
  }
  return inner;
}

const outerValue = outer();
outerValue();

/* useCase 1: Data privacy  */
/* keep variables private */
function keepVariablePrivate() {
  let privateVariable = 0;
  return {
    value() {
      return privateVariable;
    },
    incrementValue() {
      privateVariable++;
    },
  };
}
const func = keepVariablePrivate(); /* can't access the variable directly */
func.incrementValue();
func.incrementValue();
func.incrementValue(); /* it remembers past upgrades */
// console.log(func.value());

/* useCase 2: breaking functions into smaller functions */
/* dividing the jobs into separated functions  */
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const result = multiply(2);
const finalValue = result(10);

/* useCase 3: catching expensive computations */
const slowSquare = (x) => x * x;
function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (cache[arg]) return cache[arg];
    cache[arg] = fn(arg);
    console.log("cached new item!");
    return cache[arg];
  };
}
const fastSquare = memoize(slowSquare);
// console.log(fastSquare(2));
// console.log(fastSquare(2));
