function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!target[key]) target[key] = source[key];
    }
  }
  return target
}

const target = { x: 1 };
const source_1 = { y: 2 };
const source_2 = { z: 6 };

const result = merge(target, source_1, source_2);
console.log(result);
