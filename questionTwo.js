/**
 * Given an integer array nums, and it contains two elements that sum up to a specific number target. Design a method (function) to find them.

You can assume that there is always exactly one solution.The order of the result does not matter.

Example:
Input: nums = [1, 4, 7, 23, 9], and target = 13.
Output: {4, 9}, because 4 + 9 = 13.*/

function findSumUp(nums, target) {
  const sortNums = nums.sort((a, b) => a - b);
  const sortNumsLen = sortNums.length;
  const halfTarget = Math.floor(target / 2);
  const halfValue = sortNums.find((v) => halfTarget < v);
  const halfIdx = sortNums.indexOf(halfValue);
  const reverse = sortNumsLen - halfIdx < halfIdx;

  const newNums = reverse ? sortNums.reverse() : sortNums;
  const checkLen = reverse ? sortNumsLen - halfIdx : halfIdx;
  for (let index = 0; index < checkLen; index++) {
    const otherNum = target - newNums[index];
    if (newNums.indexOf(otherNum) > -1) {
      return [newNums[index], otherNum];
    }
  }
  return "no match!";
}

const nums = [100, 1, 4, 7, 23, 9];
const target = 16;
console.log(findSumUp(nums, target));
