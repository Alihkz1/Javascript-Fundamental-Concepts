class TypedMap extends Map {
  constructor(keyType, valueType, entries) {
    if (entries) {
      const entryArray = Object.entries(entries || {});
      for (const [k, v] of entryArray) {
        if (typeof k != keyType || typeof v != valueType) {
          throw new Error(`Wrong type detected here. ${k}:${v}`);
        }
      }
      super(entryArray);
      // can not access this keyword before init superClass constructor
      this.keyType = keyType;
      this.valueType = valueType;
    }
  }

  setItem(key, value) {
    if (typeof key != this.keyType || typeof value != this.valueType) {
      throw new Error(`Wrong type detected here. ${key}:${value}`);
    }
    return super.set(key, value);
  }

  getItem(key) {
    return super.get(key);
  }
}

const entries = { age: "19", grade: 20, height: 190 };
const typedMap = new TypedMap("string", "number", entries);
typedMap.setItem("meow", 200);
console.log(typedMap.get("age"));
console.log(typedMap.get("meow"));
