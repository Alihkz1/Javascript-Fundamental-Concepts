let counter = 0;

(() => {
  if (true) counter++;
})();

(function () {
  if (counter === 1) counter++;
})();

console.log(counter);
