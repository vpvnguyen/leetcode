// used to do a boolean check on every element of the array
// Syntax: arr.every(callback(element[, index[, array]])[, thisArg])

const array = [0, 10, 14];
const array2 = ['a', 'b', 'c', 'b', 'a'];
const str = 'abcba';

// is every value greater than 5?

console.log(array.every(val => val > 5)); // false
console.log(array.every(val => val === val)); // true

// palindrome
const palindrome = (str) => {
    return str.split('').every((character, index) => character === str[str.length - index - 1]);
};

const palindromeTwo = str => str.split('').every((character, index) => character === str[str.length - index - 1]);


console.log(palindromeTwo(str)); // true