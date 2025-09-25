const original = {
  name: "Ali",
  phones: {
    primary: "0937",
  },
  age: 24,
};

// nested objects are same reference 
const shallowCopy = {
  ...original,
};
// shallowCopy.phones.primary = "0935"
// console.log('org is: ', original);
// console.log('shallow is: ', shallowCopy)


// brand new Object
const RemoveHeapId = (obj) => JSON.parse(JSON.stringify(obj));
const deepCopy = RemoveHeapId(original);
deepCopy.phones.primary = "0910"

console.log('org is: ', original);
console.log('deepCopy is: ', deepCopy)

