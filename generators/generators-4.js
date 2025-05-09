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
