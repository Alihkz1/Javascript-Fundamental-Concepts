function memoize(fn) {
  const map = new Map();
  return function (arg) {
    const valueInMap = map.get(arg);
    if (valueInMap) return valueInMap;
    else {
      map.set(arg, fn(arg));
      console.log(`cached arg ${2}`);
      return fn(arg);
    }
  };
}

const twice = (x) => x * 2;

const fastTwice = memoize(twice);
fastTwice(2);
fastTwice(2);

// my problem: i was invoking this way:
memoize(twice)(2);
memoize(twice)(2);
// and i was getting 'cached' log twice!
