async function wait(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) throw new Error("Time travel not implemented!");
    setTimeout(resolve, duration);
  });
}

const delay = await wait(2000);
console.log("Hello after 2s");
