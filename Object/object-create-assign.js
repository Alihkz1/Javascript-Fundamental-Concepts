/* Create Api Method */
let p = { x: 1, y: 5 };
let c = Object.create(p);
console.log(c);

/* Assign Api Method */
const target = { name: "Ali" };
const source = { age: "24", height: 187 };
const ali = Object.assign(target, source);
console.log(ali);
