const obj = { x: 1, y: NaN, z: -Infinity };
console.log(JSON.stringify(obj));
// NaN, Infinity, -Infinity -> are serialized to null
