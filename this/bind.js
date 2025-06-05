// bind does not invokes -> only returns a function
const servants = { count: 0 };
function increment() {
  this.count++;
}

const incrementor = increment.bind(servants);
incrementor();
incrementor();
incrementor();
increment.bind(servants)();

console.log(servants.count);
