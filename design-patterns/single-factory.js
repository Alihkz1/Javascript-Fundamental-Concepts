// The Simple Factory design pattern is a creational pattern
// that provides a method for creating objects without exposing
// the instantiation logic to the client. Instead of instantiating
// classes directly, you delegate this responsibility to a separate
// method (the factory method).

class Cat {
  sound = () => {
    console.log("meow");
  };
}

class Dog {
  sound = () => {
    console.log("barking");
  };
}

class Wolf {
  sound = () => {
    console.log("Aw");
  };
}

class AnimalFactory {
  static create(type) {
    switch (type) {
      case "cat":
        return new Cat();
      case "dog":
        return new Dog();
      case "wolf":
        return new Wolf();
    }
  }
}

const cat = AnimalFactory.create("cat");
cat.sound();

const dog = AnimalFactory.create("dog");
dog.sound();
