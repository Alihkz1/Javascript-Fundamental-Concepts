/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const border = nums.length / 2;
  const map = new Map();
  let returnVal = false;
  nums.forEach((number) => {
    if (map.has(number)) map.set(number, map.get(number) + 1);
    else map.set(number, 1);
    if (map.get(number) > border) {
      returnVal = true;
    }
  });
  return returnVal;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
