function factorial(n) {
  if (n == 0 || n == 1) return 1;
  let result = 1;
  for (i = n; i >= 2; i--) {
    result *= i;
  }
  return result
}

console.log(factorial(3));
console.log(factorial(4));

