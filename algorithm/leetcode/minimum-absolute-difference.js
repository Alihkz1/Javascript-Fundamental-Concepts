/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  const sorted = arr.sort((a, b) => a - b);
  const diffArr = [];
  for (i = 0; i < sorted.length; i++) {
    let diff = Math.abs(sorted[i] - sorted[i + 1]);
    if (!Number.isNaN(diff)) diffArr.push(diff);
  }
  const subArrSize = Math.min(...diffArr);
  console.log(subArrSize);
};

const input = [3,8,-10,23,19,-4,-14,27];
minimumAbsDifference(input);
