function partialLeft(fn, ...outerArgs) {
  return function (...innerArgs) {
    return fn.apply(this, [...outerArgs, ...innerArgs]);
  };
}

function partialRight(fn, ...outerArgs) {
  return function (...innerArgs) {
    return fn.apply(this, [...innerArgs, ...outerArgs]);
  };
}

const f = function (x, y, z) {
  return x * (y - z);
};

const computationResultLeft = partialLeft(f, 2)(3, 4); 
const computationResultRight = partialRight(f, 2)(3, 4); 
console.log(computationResultRight);
