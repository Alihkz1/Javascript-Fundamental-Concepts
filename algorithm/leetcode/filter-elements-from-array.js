/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = []
    arr.forEach((el, i) => {
        if(!!fn(el, i)) result.push(el);
    })
    return result
};