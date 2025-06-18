/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (firstArg) {
  return {
    toBe: (sec) => {
      if (firstArg === sec) return true;
      throw new Error("Not Equal");
    },
    notToBe: (sec) => {
      if (firstArg !== sec) return true;
      throw new Error("Equal");
    },
  };
};

console.log(expect(3).toBe(3));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
