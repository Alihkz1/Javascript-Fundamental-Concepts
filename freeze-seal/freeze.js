// They don’t freeze/seal nested objects unless you do it recursively.

let person = Object.freeze({
  name: "ali",
  age: 12,
  data: {
    music: true,
  },
});

person.height = 2.1; // won't work
delete person.age; // won't work
person.name = "meow"; // won't work
person.data.music = false; // works

person = {
  // works
  ...person,
  major: "programming",
};

console.log(person);
