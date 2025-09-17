/**
 * @param {number[]} stones
 * @return {boolean}
 */

const path1 = [0, 1, 3, 5, 6, 8, 12, 17];
const path2 = [0, 1, 2, 3, 4, 8, 9, 11];
const path3 = [0, 1, 3, 5, 6, 7, 8, 12, 17];

var canCross = function (stones) {
  lastK = 0;
  for (let i = 0; i < stones.length; i++) {
    const curr = stones[i];
    const next = stones[i + 1];
    const nextNext = stones[i + 2];
    if (!next) break;
    const distance = next - curr;
    const canMove = distance <= lastK + 1 && distance >= lastK - 1;
    console.log(
      "lastK:  ",
      lastK,
      " distance:  ",
      distance,
      " canMove: ",
      canMove
    );
    if (!canMove) return false;
    else lastK = distance;
  }
  return true;
};

const can = canCross(path1);
console.log(can);
