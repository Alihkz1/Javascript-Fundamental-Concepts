function* echo() {
  const input = yield "tell me something";
  console.log("you told me " + input);
}

const echoAsVariable = echo();
console.log(echoAsVariable.next().value);
echoAsVariable.next("Meow");
