let person = Object.freeze({
  name: "ali",
  age: 12,
});

person.height = 2.1; // won't work
delete person.age; // won't work
person.name = "meow"; // won't work

person = {
  // works
  ...person,
  major: "programming",
};

console.log(person);
