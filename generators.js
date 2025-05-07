// function* myGenerator() {
//   yield "hello";
//   yield "hello 2";
//   return "done";
// }

// const gen = myGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(myGenerator().next());
// console.log(myGenerator().next());
// console.log(myGenerator().next());
// console.log(myGenerator().next());

function* generatorA() {
  yield "A1";
  yield "A2";
}

function* generatorB() {
  yield "B1";
  yield "B2";
  yield* generatorA();
  yield "B3";
}

for (const value of generatorB()) {
  console.log(value);
}
