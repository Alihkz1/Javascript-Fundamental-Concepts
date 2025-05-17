// why voice is not initializing !!!

let cat = {
  voice: "meow",
  type: "mammal",
};

/* delete properties */
console.log("delete cat.voice: ", delete cat.type);
console.log("delete cat.x: ", delete cat.x); /* why returns true? */
console.log("delete cat.toString: ", delete cat.toString);

console.log("voice in cat: ", "voice" in cat);

/* check properties are enumerable */
console.log('propertyIsEnumerable("type"): ', cat.propertyIsEnumerable("type"));
console.log(
  'propertyIsEnumerable("toString"): ',
  cat.propertyIsEnumerable("toString")
);

/* check properties are own */
console.log('hasOwnProperty("type"): ', cat.hasOwnProperty("type"));
console.log('hasOwnProperty("toString"): ', cat.hasOwnProperty("toString"));

/* get own properties */
console.log("getOwnPropertyNames: ", Object.getOwnPropertyNames(cat));
console.log("getOwnPropertySymbols: ", Object.getOwnPropertySymbols(cat));
