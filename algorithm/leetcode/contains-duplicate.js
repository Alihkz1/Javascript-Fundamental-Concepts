/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();
  let has = false;
  nums.forEach((n, i) => {
    if (map.has(n)) has = true;
    map.set(n, i);
  });
  return has;
};
