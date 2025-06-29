/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const myMap = new Map();
  return function (...args) {
    const mapKey = JSON.stringify(args);
    if (!myMap.has(mapKey)) myMap.set(mapKey, fn(...args));
    return myMap.get(mapKey);
  };
}

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// memoizedFn(2, 3);
// memoizedFn(2, 3);

let callCount = 0;
const sum = (a, b) => {
  callCount++;
  return a + b;
};
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2

console.log("callCount:", callCount);
