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
