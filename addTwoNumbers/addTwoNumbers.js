/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// medium

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


const array = [2, 4, 3];
const array2 = [5, 6, 4];

const expected = 708

const fixArray = (array) => {
    const reversedArray = array.reverse().toString();
    const removeComma = reversedArray.replace(/,/g, '');
    const numbers = Number(removeComma);
    return numbers;
}

var addTwoNumbers = function(numbers1, numbers2) {
    const sum = numbers1 + numbers2;
    const sumToStr = sum.toString();
    const sumToArray = sumToStr.split('').reverse();
    const numbersArray = sumToArray.map( value => {
        return Number(value)
    })
    return numbersArray;
};

addTwoNumbers(fixArray(array), fixArray(array2));