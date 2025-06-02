const array = [98, 57];
let s = new Set("1", "5", [42, 55], array);
console.log(s.has([42, 55]));
console.log(s.has(array));
console.log(s.has("1"));
