function delay(ms) {
  let timer;
  const promise = new Promise((resolve) => {
    timer = setTimeout(resolve, ms);
  });
  return {
    promise,
    cancel: () => {
      clearTimeout(timer);
      console.log("delay canceled!");
    },
  };
}

const { promise, cancel } = delay(3000);

promise.then(() => console.log("promise resolved!"));

setTimeout(() => {
  cancel();
}, 2000);
