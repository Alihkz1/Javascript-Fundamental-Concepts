const person = {
  name: "Ali",
  age: 25,
};

const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : "not found";
  },
  set(target, prop, value) {
    const propInTarget = target[prop];
    if (propInTarget && typeof propInTarget != typeof value)  throw TypeError("unmatched types.");
      target[prop] = value;
      return true;
  },
};

const proxyPerson = new Proxy(person, handler);

console.log(proxyPerson.name);
proxyPerson.age = 22;
console.log(proxyPerson.age);
