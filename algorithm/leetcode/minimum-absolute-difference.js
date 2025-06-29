/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  const result = [];
  const sorted = arr.sort((a, b) => a - b);
  const diffArr = [];
  for (let i = 0; i < sorted.length; i++) {
    let diff = Math.abs(sorted[i] - sorted[i + 1]);
    if (!Number.isNaN(diff)) diffArr.push(diff);
  }
  const FinalDiff = Math.min(...diffArr);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] === FinalDiff) {
      result.push([sorted[i - 1], sorted[i]]);
    }
  }
  console.log(result);
  return result;
};

const input = [3, 8, -10, 23, 19, -4, -14, 27];
const input2 = [1, 3, 6, 10, 15];
minimumAbsDifference(input);
minimumAbsDifference(input2);
