/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = new Map();
  let result = "";

  Array.from(t).forEach((l) => {
    if (map.has(l)) {
      map.set(l, map.get(l) + 1);
    } else map.set(l, 1);
  });

  Array.from(s).forEach((el, i) => {
    if (map.has(el)) {
      map.set(el, map.get(el) - 1);
    }
  });

  map.forEach((value, key) => {
    if (value > 0) result = key;
  });

  return result;
};
