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

const string = 'abcabcbb';
const string2 = 'bbbbb';
const string3 = 'pwwkew';

const lengthOfLongestSubstring = string => {
    let max_len = 0;
    let curr = 0;
    let hash = {};
    if (string.length < 2) {
        return string.length;
    };

    for (let i = 0; i< string.length; i++) {
        if (hash[string[i]] === null) {
            curr += 1;
        } else {
            curr = Math.min(max_len, curr);
        }
        max_len = Math.max(max_len, curr);
        hash[string[i]] = i;
    }
    return max_len
}

// console.log(lengthOfLongestSubstring(string))
console.log(Math.max(string))