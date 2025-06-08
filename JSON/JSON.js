const obj = {
  name: "Ali",
  age: 34,
  data: {
    music: "yes",
    sport: "basketball",
  },
  height: null,
  occupation: "Programmer",
};

// first way to restrict a few fields only
const stringify = JSON.stringify(obj, ["name", "data"]); // data is empty !!!
console.log(stringify);

// to write a custom function
restrict = (k, v) => {
  // remove data object + remove values of undefined and  null
  if (!v || k === "data") return;
  return v;
};
const withFunction = JSON.stringify(obj, restrict);
console.log(withFunction);
