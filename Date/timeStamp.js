// now static method
// getTime() method
const date = new Date();
console.log(date.getTime() + 60000); // 1 min later;
console.log(Date.now() - date.getTime());
