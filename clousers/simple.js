function outer() {
  const outerValue = "im from outer";
  function inner() {
    console.log(outerValue);
  }
  return inner;
}

const outerValue = outer();
outerValue();

// advanced syntax
function outer() {
  const outerValue = "im from outer";
  return function () {
    console.log(outerValue);
  };
}
outer()();
