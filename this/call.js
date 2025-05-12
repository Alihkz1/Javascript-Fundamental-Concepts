// .call(); like .bind() with invoking straight away
function logger() {
  console.log(this);
  console.log(this.name);
}
// logger();
const Iran = {
  name: "Iran",
};
// logger.call(Iran);



// .apply(); like .call() but with array of arguments
function greet(city) {
  console.log(`${this.name} from ${city} is greeting!`);
}

const greeter = {
  name: "Sarah",
};

greet(greeter, ["NY"]);
