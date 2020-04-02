// 14. Longest Common Prefix
// Easy

// 2170

// 1719

// Add to List

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

// horizontal method - compare letter by letter to see if they are similar
// issue with this is that you need to go through every single character disregarding if the last entry is different

// vertical method - compare all of the letters at the same time
// this method allows you to compute and quit on different entry without having to iterate through every letter

/**
 * @param {string[]} strings
 * @return {string}
 */

const input = ["flower", "flow", "flight"];
const input2 = ["dog", "racecar", "car"];

const longestCommonPrefix = strs => {
  // define a prefix variable
  let prefix = "";
  if (strs.length === 0) return prefix;

  // loop through characters
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    // loop through all strings
    for (let j = 0; j < strs.length; j++) {
      // compare
      if (strs[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }

  return prefix;
};

console.log(longestCommonPrefix(input));
console.log(longestCommonPrefix(input2));
