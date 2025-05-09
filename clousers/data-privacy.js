/* Data privacy  */
/* keep variables private */
function keepVariablePrivate() {
  let privateVariable = 0;
  return {
    get() {
      return privateVariable;
    },
    set(v) {
      privateVariable = v;
    },
    incrementValue() {
      privateVariable++;
    },
  };
}
const func = keepVariablePrivate(); /* can't access the variable directly */
func.set(10000);
func.incrementValue();
func.incrementValue();
func.incrementValue(); /* it remembers past upgrades */
// console.log(func.get());
