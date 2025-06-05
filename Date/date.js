const now = new Date(); // utc
// console.log(now);

const birth = new Date(Date.UTC(2001, 0, 18));
birth.setDate(12); // day
console.log(birth.getDate());
console.log(birth);
