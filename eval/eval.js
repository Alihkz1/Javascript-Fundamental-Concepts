const gEval = eval;
globalThis.x = "global";
globalThis.y = "global";

const f = () => {
  let x = "local";
  eval("x += ' changed!'");
  return x;
};

const g = () => {
  let y = "local";
  gEval("y += ' changed!'");
  return y;
};

console.log(f());
console.log(g());
console.log(globalThis.x);
console.log(globalThis.y);
