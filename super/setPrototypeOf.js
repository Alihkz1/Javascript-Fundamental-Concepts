const Animal = {
  talk() {
    console.log("animal is talking");
  },
};

const Bird = {
  talk() {
    console.log("bird is talking");
  },
};

const Dog = {
  talk() {
    super.talk();
  },
};

Object.setPrototypeOf(Dog, Animal);
Dog.talk();
Object.setPrototypeOf(Dog, Bird);
Dog.talk();
