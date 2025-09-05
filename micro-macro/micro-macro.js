console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log(2.5);
  }, 0);
});

Promise.resolve().then(() => {
  console.log(3);
});

queueMicrotask(() => console.log(5));

console.log(6);

// 1 6 3 2.5 5 2 
// 1 6 4 5 2 2.5
