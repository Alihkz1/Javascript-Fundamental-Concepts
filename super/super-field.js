// super in child field

class Animal {
  animalType;
  constructor(type) {
    this.animalType = type;
  }
  talk() {
    console.log(this.animalType + " is talking");
  }
}

class Dog extends Animal {
  bark = super.talk();
  bark2 = this.talk();
  constructor() {
    super("Dog");
  }
}

const dogInstance = new Dog();
dogInstance.bark;
dogInstance.bark2;
