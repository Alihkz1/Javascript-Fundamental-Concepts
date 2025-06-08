let person = Object.seal({
  name: "ali",
  age: 12,
});

person.height = 2.1; // won't work
delete person.age; // won't work
person.name = "meow"; // works

console.log(person);
