// In Factory Method, the superclass defines an abstract method
// for creating an object, and subclasses override this method
// to return different types of objects.

class Person {
  age() {
    throw new Error("Age not specified!");
  }
}

class Ali {
  age() {
    console.log(24);
  }
}

class Alex {
  age() {
    console.log(12);
  }
}

class EngineerAli extends Person {
  create() {
    return new Ali();
  }
}

const engineerAli = new EngineerAli();
const ali = engineerAli.create();
ali.age();
