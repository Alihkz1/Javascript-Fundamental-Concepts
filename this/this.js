const person = {
  name: "Ali",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

/* case 1 */
const greet = person.greet; // extract the function from person
greet(); /* Invoking greet() uses default binding, so this refers to the global object (window in browsers). */

/* case 2 */
person.greet(); // prints Hello Ali

/* case 3 */
const boundedToPerson = person.greet.bind(person); /* .bind(contextObject)  */
boundedToPerson();
