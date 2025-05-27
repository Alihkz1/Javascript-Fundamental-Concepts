let scope = "global";
function constructFunction() {
  let scope = "local";
  return new Function("return scope");
}

const value = constructFunction()(); /* invoking inner function */
console.log(value);
