let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 1;


const flatten = (arr, n)=> {
    const result = []

    function compute(arr, depth) {
        if(depth > n) {
            result.push(arr)
            return
        }
        arr.forEach((el)=> {
            if(typeof el === 'object')
                compute(el, depth + 1 )
            else {
                result.push(el)
            }
        })
    }

    compute(arr,0)

    return result
}

console.log(flatten(arr,n))