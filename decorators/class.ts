function Logger(constructor: Function) {
  console.log("class " + constructor.name + " is created");
}

@Logger
class MyClass {}
