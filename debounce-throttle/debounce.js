// first attempt
function debounceCreator(callback, timeout) {
  // how to clear timeout?
  const timeoutId = setTimeout(() => {
    callback();
  }, timeout);
}
debounceCreator(() => console.log("meow"), 2000);

// the answer
function myDebounce(callback, timeout) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
}
const final = myDebounce(() => console.log("meow"), 2000);
final();
