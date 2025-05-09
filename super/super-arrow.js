class Athlete {
  greet(major) {
    return "Hello " + major + " player";
  }
}

class Hooper extends Athlete {
  init = () => {
    console.log(super.greet("Basketball"));
  };
}

const hooper = new Hooper();
hooper.init();

// arrow function do not have their own this
