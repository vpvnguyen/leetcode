// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// const string = 'abcabcbb';

// const strWithoutRepeatng = (string) => {
//     const strLength = string.length;
//     let ans = 0;
//     for (let i = 0; i < strLength; i++) {

//     }
// }

// strWithoutRepeatng(string)

const array = [1, 2, 6, 2]
const max = array.reduce((a, b) => {
    return Math.max(a, b)
});

console.log(max)