function IsPrime(n) {
  let base = [2, 3, 5, 7];
  const found = base.findIndex((el) => n % el === 0) > -1;
  return !found
}

console.log(IsPrime(19));
console.log(IsPrime(17));
console.log(IsPrime(49));
console.log(IsPrime(16));

