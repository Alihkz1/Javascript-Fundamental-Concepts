// // In Factory Method, the superclass defines an abstract method
// // for creating an object, and subclasses override this method
// // to return different types of objects.

// class Person {
//   age() {
//     throw new Error("Age not specified!");
//   }
// }

// class Ali {
//   age() {
//     console.log(24);
//   }
// }

// class Alex {
//   age() {
//     console.log(12);
//   }
// }

// class EngineerAli extends Person {
//   create() {
//     return new Ali();
//   }
// }

// const engineerAli = new EngineerAli();
// const ali = engineerAli.create();
// ali.age();


// Product classes
class Sedan {
  constructor() {
    this.type = "Sedan";
  }
  drive() {
    console.log("Driving a sedan...");
  }
}

class SUV {
  constructor() {
    this.type = "SUV";
  }
  drive() {
    console.log("Driving an SUV...");
  }
}

// Factory Method
class CarFactory {
  static createCar(carType) {
    switch (carType) {
      case "sedan":
        return new Sedan();
      case "suv":
        return new SUV();
      default:
        throw new Error("Unknown car type");
    }
  }
}

// Usage
const car1 = CarFactory.createCar("sedan");
car1.drive(); // Driving a sedan...

const car2 = CarFactory.createCar("suv");
car2.drive(); // Driving an SUV...
