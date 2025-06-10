function* smallNumbers() {
  console.log("the first passed argument is discarded");
  let y1 = yield 1; // returns 1 but puts the arg to y1 variable
  console.log("y1 -> ", y1); // awwww
  let y2 = yield 2;
  console.log("y2 -> ", y2); // waghwhagh
  let y3 = yield 3;
  console.log("y3 -> ", y3); // hophop
  return 4;
}

let g = smallNumbers();
let n1 = g.next("meow");
console.log("generator yielded => ", n1.value);
let n2 = g.next("awwww");
console.log("generator yielded => ", n2.value);
let n3 = g.next("waghwhagh");
console.log("generator yielded => ", n3.value);
let n4 = g.next("hophop");
console.log("generator yielded => ", n4.value);
