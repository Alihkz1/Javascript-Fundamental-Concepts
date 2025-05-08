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
