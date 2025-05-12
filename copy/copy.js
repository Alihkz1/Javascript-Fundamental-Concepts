const original = {
  name: "Ali",
  phones: {
    primary: "0937",
  },
  age: 24,
};

const shallowCopy = {
  ...original,
};

const RemoveHeapId = (obj) => JSON.parse(JSON.stringify(obj));

const deepCopy = RemoveHeapId(original);

console.log(deepCopy);

