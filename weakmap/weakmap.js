let alien = { name: "Ali", age: 20 };

const wm = new WeakMap();
wm.set(alien, "alien");

console.log(wm.has(alien)); //true

alien = null // Now the object has no strong references

console.log(wm.has(alien)); /* maybe true; maybe false; depends on GC state. */

// At some point later, the GC will collect the object,
// and the WeakMap will automatically remove its entry.