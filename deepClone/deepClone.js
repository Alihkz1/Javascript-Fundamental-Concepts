const deepClone = (obj) => {
    if (typeof obj === null || typeof obj != 'object') return obj
    const copy = Array.isArray(obj) ? [] : {}
    Object.keys(obj).forEach((key) => {
        copy[key] = deepClone(obj[key])
    })
    return copy
}

const obj1 = { name: 'ali', expriences: ['tavana', 'hamkaran'] }
const copy = deepClone(obj1);

console.log(obj1);
console.log(copy);
console.log(obj1 === copy);
