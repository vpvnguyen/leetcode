// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// /**
//  * @param {number} x
//  * @return {number}
//  */
const input = 123;
const input2 = -123;
const input3 = 120;

const reverse = input => {
  // get absolute value of input and convert to string
  const absNum = Math.abs(input);

  // convert absNum to string, split, reverse, join
  const reverseStr = absNum
    .toString()
    .split("")
    .reverse()
    .join("");

  // convert reversed string back to a number
  const reverseNum = Number(reverseStr);

  // multiply reversedNum with the original input sign value
  const signNum = reverseNum * Math.sign(input);

  return signNum;
};

console.log(reverse(input));
console.log(reverse(input2));
console.log(reverse(input3));
