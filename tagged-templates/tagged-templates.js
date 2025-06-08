function tag(strings, ...args) {
  console.log(strings);
  console.log(args);
  return strings.reduce((total, current, i) => {
    return (total += args[i - 1] + current);
  });
}

const myName = "Ali";
const age = 23;

const myStr = tag`Hello dear ${myName}; Your age is ${age}`;
console.log(myStr);
