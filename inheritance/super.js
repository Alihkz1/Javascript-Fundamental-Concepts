class Person {
  constructor(skinColor) {
    console.log("the skin color is " + skinColor);
  }
}

class Engineer extends Person {
  constructor(name, skinColor) {
    super(skinColor);
    console.log("person name: " + name);
  }
}

const engineer = new Engineer("Ali", "Brown");

// if both parent and child have constructors -> we need call super in the child constructor
// otherwise we get this error
// ReferenceError: Must call super constructor in derived class before accessing 'this'
