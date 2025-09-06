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
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
