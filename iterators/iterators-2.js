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
