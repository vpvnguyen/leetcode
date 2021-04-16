// funWithAnagrams - Problem 1 ====================================
// Given an array of strings,
// remove each string that is an anagram of an earlier string,
// then return the remaining array in ascending order.

// Sample Input
// ["code", "doce", "ecod", "framer", "frame", "remarf"]
// Sample Output
// ['code', 'frame', 'framer']
const funWithAnagrams = (text) => {
  // Create a map to store the occurrences of strings
  const map = {};

  // Create a function to sort and return the string in alphabetical order
  const sortString = (string) => string.split("").sort().join("");

  // Iterate through each string from the given array
  // and return a new array of alphabetically sorted strings
  const sortedStringsInGivenArray = text.map((value) => sortString(value));

  // Iterate through the array of sorted strings
  // If the sorted string does not exist in the map object,
  // set the sorted string as it's property and set it's value as the original string
  sortedStringsInGivenArray.forEach((item, index) => {
    if (!map[item]) map[item] = text[index];
  });

  // Create an array of the original strings from the values of the map object
  const mapValues = Object.values(map);

  // Sort the array of original strings in ascending order
  const sortedAnswer = mapValues.sort();

  return sortedAnswer;
};

// funWithAnagrams2 - Problem 2 ====================================
// Given an array of strings,
// determine if any of them are anagrams
// then remove any of the subsequent anagrams.
// Return an array of the first instance of each anagram that is sorted in ascending order.

// Sample Input
// ["code", "doce", "ecod", "framer", "frame", "remarf"]
// Sample Output
// ['code', 'framer']

const funWithAnagrams2 = (text) => {
  // Create a map to store the occurrences of strings
  const map = {};

  // Create an array to store the answers
  const answers = [];

  // Iterate through the strings from the given array
  // and return a new array of alphabetically sorted strings
  const sortString = (string) => {
    return string.split("").sort().join("");
  };

  // Iterate through each string from the given array
  // For each string, sort the string alphabetically
  // If the sorted string exists as a key on the map, increment it's count property by 1
  // If the sorted string does not exist as a key on the map,
  // set the original string as the firstElement
  // and set it's count to 1
  // We do it in this specific order, otherwise, it will falsely increment
  text.forEach((item) => {
    const sortedString = sortString(item);

    if (map[sortedString]) {
      map[sortedString].count += 1;
    }

    if (!map[sortedString]) {
      map[sortedString] = {
        firstElement: item,
        count: 1,
      };
    }
  });

  // Create an array of the string's firstElement and count
  // Ex.: [{ firstElement: 'code', count: 1 }]
  const mapValues = Object.values(map);

  // Iterate through the array of the string's firstElement and count
  // If the string's count is greater than 1, push the string's firstElement to the answers array
  mapValues.forEach(({ firstElement, count }) => {
    if (count > 1) answers.push(firstElement);
  });

  return answers;
};

// Input
const text = ["code", "doce", "ecod", "framer", "frame", "remarf"];

// Output
funWithAnagrams(text); // [ 'code', 'frame', 'framer' ]
funWithAnagrams2(text); // [ 'code', 'framer' ]
