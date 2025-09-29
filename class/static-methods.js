class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static parse(name, age) {
    return new Person(name, age);
  }
}

const ali = Person.parse("Ali", 22);
console.log(ali);

const nigga = new Person()
const niggaP = nigga.parse("N", 20) // nigga.parse is not a function
console.log(niggaP);

