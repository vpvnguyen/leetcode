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

// var nums = [2, 7, 11, 15];

// var target = 9;

// var twoSum = function(nums, target) {

//     if (nums[0] + nums[1] === target) {
//         return [0, 1];
//     }
// };

// console.log(twoSum(nums, target));


const array = [3, 3, 1, 3];
const target = 6;

// i = 0, j = 1
const twoSum = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j];
            }
        }
    }

    return 'fuck off';
}

// Array.map()
// Array.filter()
// Array.reduce()
// Array.forEach()
// Array.indexOf()
// Array.includes()

const answer = twoSum(array, target);
console.log(answer);