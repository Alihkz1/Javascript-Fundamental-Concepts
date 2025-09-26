function onCall(fn) {
    let counter = 0
    return function (...args) {
        counter++
        if (counter === 1) return counter === 1 ? fn(...args) : undefined
    }
}

const twice = (n) => n * 2

const onlyOneCall = onCall(twice);
console.log(onlyOneCall(3))
console.log(onlyOneCall(3))
console.log(onlyOneCall(3))
console.log(onlyOneCall(3))