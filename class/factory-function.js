// Factory Function
function personFactory(name, age) {
  return {
    name,
    age,
    // syntax method 1
    greet: function () {
      console.log("Hello from ", this.name);
    },
    // syntax method 2
    bye() {
      console.log("Bye");
    },
  };
}

const ali = personFactory("ali", 24);
ali.greet();
ali.bye();
