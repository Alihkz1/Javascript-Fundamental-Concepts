const map = new Map();
map.set("cat", "meow");
map.set("dog", "bark");
map.set("wolf", "au");
console.log(map.size);

// destructing map
for (let [key, value] of map) {
  console.log(`value of ${key} is ${value}`);
}

const keysAsArray = [...map.keys()];
const valuesAsArray = [...map.values()];

console.log(keysAsArray);
console.log(valuesAsArray);

map.forEach((value, key) => {
  console.log(`value of ${key} is ${value}`);
});
