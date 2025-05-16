const meowLogger = () => console.log("🐈‍⬛meow");

// first attempt
function debounceCreator(callback, timeout) {
  setTimeout(() => {
    callback();
  }, timeout);
}
debounceCreator(meowLogger, 2000);

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
const final = myDebounce(meowLogger, 2000);
final();
