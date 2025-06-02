class MyMap {
  obj = {};
  set(key, value) {
    this.obj[key] = value;
    // this.obj = {
    //   ...this.obj,
    //   [key]: value,
    // };
  }
  get(key) {
    return this.obj[key];
  }
  has(key) {
    return this.obj[key] !== undefined;
  }
  size() {
    return Object.keys(this.obj).length;
  }
}

const myMap = new MyMap();
myMap.set("cat", "meow");
myMap.set("dog", "barking");

console.log(myMap.has("cat"));
console.log(myMap.get("cat"));
console.log(myMap.size());
