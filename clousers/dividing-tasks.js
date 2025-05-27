/* breaking functions into smaller functions */
/* dividing the jobs into separated functions  */
function multiply(outerArg) {
  return function (innerArg) {
    return outerArg * innerArg;
  };
}

const result = multiply(2);
/* a = 2; result is a function that remembers a = 2 forever in result variable */
const finalValue = result(10); /* b = 10 */
console.log(finalValue);

const secondSyntax = multiply(2)(10);
console.log(secondSyntax);
