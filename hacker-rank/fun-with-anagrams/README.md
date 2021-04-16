# Fun With Anagrams

## Problem 1

Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.

## Example

Input
text = ['code', 'doce', 'ecod', 'framer', 'frame']

Output
['code','frame','framer']

- 'code' and 'doce' are anagrams. Remove 'doce' from the array and keep the first occurrence code in the array.
- 'code' and 'ecod' are anagrams. Remove 'ecod' from the array and keep the first occurrence code in the array.
- 'code' and 'framer' are not anagrams. Keep both strings in the array.
- 'framer' and 'frame' are not anagrams due to the extra 'r' in 'framer'. Keep both strings in the array.
- Order the remaining strings in ascending order: ['code','frame','framer'].

## Problem 2

Given an array of strings, determine if any of them are anagrams then remove any of the subsequent anagrams.
Return an array of the first instance of each anagram that is sorted in ascending order.

## Example

Input
text = ["code", "doce", "ecod", "framer", "frame", "remarf"]

Output
['code','framer']

- 'code' and 'doce' are anagrams. Remove 'doce' from the array and keep the first occurrence code in the array.
- 'code' and 'ecod' are anagrams. Remove 'ecod' from the array and keep the first occurrence code in the array.
- 'framer' and 'frame' are not anagrams due to the extra 'r' in 'framer'. Remove 'frame' from the array.
- 'framer' and 'remarf' are anagrams. Remove 'remarf' from the array and keep the first occurrence code in the array.
- Order the remaining strings in ascending order: ['code','framer'].
