/* breaking functions into smaller functions */
/* dividing the jobs into separated functions  */
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const result =
  multiply(2); /* a = 2; result is a function that remembers a = 2 forever */
const finalValue = result(10); /* b = 10 */
