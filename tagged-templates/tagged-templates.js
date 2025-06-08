function tag(strings, ...args) {
  console.log(strings);
  console.log(args);
  return args.reduce((total, current, i) => {
    total += strings[i] + current;
  });
}

const name = "Ali";
const age = 23;

const myStr = tag`Hello dear ${name}; Your age is ${age}`;
console.log(myStr);
