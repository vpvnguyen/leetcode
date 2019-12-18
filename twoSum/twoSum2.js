/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [3, 2, 4];

var target = 6;

var twoSum = function(nums, target) {

    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && nums[i] !== nums[j]) {
                return [i, j]
            }
        }
    }
};

twoSum(nums, target);
