/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    let start = Date.now();
    const result = await fn(...args);
    const elapsed = Date.now() - start;
    if (elapsed > t) throw new Error("Time Limit Exceeded");
    return result;
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(1000).catch(console.log); // "Time Limit Exceeded" at t=100ms
