/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  console.log(Array.from(t));  
  return (
    Array.from(t).findIndex((l) => {
      return Array.from(s).findIndex(l) == -1;
    }) != -1
  );
};

let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t));
