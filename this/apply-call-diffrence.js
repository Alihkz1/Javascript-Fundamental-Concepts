const person = {
  name: "Ali",
  age: 21,
  greet(city, zipCode) {
    console.log(
      `${this.name} has age of ${this.age} from ${city} and zipCode of ${zipCode}`
    );
  },
};
person.greet("NY", 2222);

const alex = {
  name: "Alex",
  age: 33,
};

person.greet.apply(alex, ["Tehran", 10000]); // -> argsArray
person.greet.call(alex, "Zanjan", 20000); // Args sequence
