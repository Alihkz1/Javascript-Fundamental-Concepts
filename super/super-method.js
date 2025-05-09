//super in child method

class Animal {
  animalType;
  constructor(type) {
    this.animalType = type;
  }
  talk() {
    console.log(this.animalType + " is talking");
  }
}

class Cat extends Animal {
  constructor() {
    super("cat");
  }
  sayMeow() {
    this.talk();
  }
  sayMeow2() {
    super.talk();
  }
}

const catInstance = new Cat();
catInstance.sayMeow();
catInstance.sayMeow2();
