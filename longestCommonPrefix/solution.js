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

function longest_common_starting_substring(arr1) {
  // concat array together and sort alphabetically
  const arr = arr1.concat().sort();
  console.log(`arr: ${arr}`);

  const a1 = arr[0];
  const a2 = arr[arr.length - 1];
  const L = a1.length;
  let i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
}

console.log(longest_common_starting_substring(["googs", "go", "google"]));

console.log(longest_common_starting_substring(["SQLInjection", "SQLTutorial"]));

console.log(longest_common_starting_substring(["abcd", "1234"]));
