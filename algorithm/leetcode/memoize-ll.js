/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map();
  return function (...args) {
    const mapKey = JSON.stringify(args);
    console.log(map.has(mapKey));
    if (!map.has(mapKey)) map.set(mapKey, fn(...args));
    return map.get(mapKey);
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return { ...a, ...b };
});
memoizedFn({}, {});
memoizedFn({}, {});
console.log(callCount); // 1
