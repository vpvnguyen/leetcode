// Easy

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const input = [0, 1, 2, 7, 11, 15];
const target = 9;
const twoSum = (nums, target) => {
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i]; // 2
    const neededValue = target - currentNumber; // 9 - 2 = 7
    const index2 = previousValues[neededValue]; // 7
    console.log(previousValues);
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[currentNumber] = i;
    }
  }
};

console.log(twoSum(input, target));
