// yield pauses a function and returns a value
// return ends the generator (further calls return {done: true})
// Instead of loading all data at once (memory-heavy), generators yield values on-demand.

function* myGenerator() {
  yield "hello";
  yield "hello 2";
  return "done";
}

const gen = myGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(myGenerator().next());
console.log(myGenerator().next());
