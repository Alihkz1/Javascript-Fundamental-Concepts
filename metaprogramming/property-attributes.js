console.log(Object.getOwnPropertyDescriptor({ x: 1 }, "x"));
console.log(Object.getOwnPropertyDescriptor({ x: 1 }, "toString"));

let person = {
  name: "ali",
};

Object.defineProperty(person, "height", {
  value: 2.3,
  writable: false,
  configurable: true,
  enumerable: false, // false -> log(person) does not show but person.height shows
});

console.log(person);
console.log(person.height);
person.height = 200; // writable is false -> this line won't be applied
console.log(person.height);
