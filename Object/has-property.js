const cat = {
  voice: "meow",
};

let person = Object.create(cat);
person = {
  ...person,
  age: 89,
  height: 2.3,
};

hasKey = (key) => Object.hasOwn(person, key); // only in object; not in prototype

console.log(hasKey("voice"));
console.log("voice" in person); // includes prototype properties
