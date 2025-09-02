const person = {
  name: "Ali",
  greet: function () {
    console.log("Hello " + this.name);
  },
  greetArrowFunction: () => {
    console.log("Hello " + this.name);
  },
};

/* case 1 */
const greet = person.greet; // extract the function from person
greet(); /* Invoking greet() uses default binding, so this refers to the global object (window in browsers). */
const arrow = person.greetArrowFunction;
arrow();

/* case 2 */
person.greet(); // prints Hello Ali

/* case 3 */
const boundedToPerson = person.greet.bind(person); /* .bind(contextObject)  */
boundedToPerson();

function cat() {
  console.log(this);
}

cat();
