function Person(name, age) {
  this.name = name;
  this.age = age;
}

const ali = new Person("Ali", 22);
console.log(ali);
console.log(ali.name);
console.log(ali instanceof Object);
console.log(ali instanceof Function);


