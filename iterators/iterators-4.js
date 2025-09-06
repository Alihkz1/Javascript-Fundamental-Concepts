const myObj = {
  data: [1, 4, 2, 5, 2, 2, 1, 1],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        return index < this.data.length
          ? {
              done: false,
              value: this.data[index++],
            }
          : { done: true };
      },
    };
  },
};

for (const v of myObj) {
  console.log(v);
}

for (const v in myObj) {
  console.log(v);
}

const iterator = myObj[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())





// Ah 👍 I see what you’re aiming for — you want to call myObj.next() directly, but right now myObj is just an iterable, not an iterator.

// 🔎 Key Difference

// Iterable → has [Symbol.iterator]() that returns an iterator.

// Iterator → has .next() method that gives { value, done }.

// Your myObj is iterable but not itself an iterator. That’s why myObj.next() doesn’t exist.

// 🟢 Option 1: Get iterator manually
// const iterator = myObj[Symbol.iterator]();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 4, done: false }

// 🟢 Option 2: Make myObj its own iterator

// You can also attach next() directly to myObj:

// const myObj = {
//   data: [1, 4, 2, 5, 2, 2, 1, 1],
//   index: 0,
//   next() {
//     return this.index < this.data.length
//       ? { value: this.data[this.index++], done: false }
//       : { done: true };
//   },
//   [Symbol.iterator]() {
//     return this; // self-iterable
//   },
// };

// console.log(myObj.next()); // { value: 1, done: false }
// console.log(myObj.next()); // { value: 4, done: false }

// for (const value of myObj) {
//   console.log(value); // continues iteration from where next() left off
// }


// ✅ Now myObj.next() works directly, and it’s also usable in for...of.