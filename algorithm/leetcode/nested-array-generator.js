/**
 * @param {Array} arr
 * @return {Generator}
 */
// var inorderTraversal = function* (arr) {
//   const result = [];
//   let index = 0;
//   function* flatten(toFlatArray) {
//     toFlatArray.forEach((el) => {
//       if (typeof el === "number") result.push(el);
//       else flatten(el);
//     });
//   }
//   flatten(arr);
//   yield result[index];
//   index++;
// };

var inorderTraversal = function* (arr) {
  function* flatten(toFlatArray) {
    for (const el of toFlatArray) {
      if (typeof el === "number") yield el;
      else yield* flatten(el);
    }
  }
  yield* flatten(arr);
};

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
