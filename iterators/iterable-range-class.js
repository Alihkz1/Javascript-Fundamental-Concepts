class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  has(x) {
    return typeof x === "number" && x >= this.from && x <= this.to;
  }

  toString() {
    return `{ x | ${this.from} ≤ x ≤ ${this.to} }`;
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    let last = this.to;
    return {
      next() {
        return next < last ? { value: next++ } : { done: true };
      },
    };
  }
}

const range = new Range(1, 100);
console.log(range.toString());

for (let x of new Range(1, 100)) console.log(x);

const spread = [...new Range(1, 100)];

console.log(spread);
console.log(spread.length);
