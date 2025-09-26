function memoize(fn) {
    const map = new Map()
    return function(...args) {
        if(map.has(...args)) {
            console.log('from cache')
            return map.get(...args)
        }
        map.set(...args, fn(...args))
        return map.get(...args)
    }
}

const twice = (x)=>x*2

const memo = memoize(twice)

console.log(memo(3))
console.log(memo(3))