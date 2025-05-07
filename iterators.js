// 1-same is [Symbol.iterator]
function createIterator(array) {
  let index = 0;
  return {
    next: () => {
      return index < array.length
        ? { value: array[index++], done: false }
        : { done: true };
    },
  };
}
const iterator = createIterator([4, 8, 6]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// 2-making ab Object iterable
const myIterable = {
  sound: ["meow", "Aow"],
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        return index < this.data.length
          ? { value: this.data[index++], done: false }
          : { done: true };
      },
    };
  },
};
for (const value of myIterable) {
  console.log(value);
}
for (const value in myIterable) {
  console.log(value);
}

// 3-custom range iterator
function range(start, end, step = 1) {
  return {
    [Symbol.iterator]() {
      let current = start;
      return {
        next: () => {
          if (current <= end) {
            const value = current;
            current += step;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}

for (const num of range(1, 8)) {
  console.log(num);
}
