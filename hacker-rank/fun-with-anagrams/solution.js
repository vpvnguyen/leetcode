function funWithAnagrams(text) {
  // Create a map to store occurrences of strings
  // If there are more than 1 occurrences, there has been a match and it is an anagram
  const map = {};

  // Create a function to sort strings alphabetically
  const sortString = (string) => {
    return string.split("").sort().join("");
  };

  // Sort the strings in the array and return a new array
  const sortedStringsInArray = text.map((value) => {
    return sortString(value);
  });

  // Iterate through the sorted strings within the array
  // If the string exists as a key within the map object, increment the occurrence by 1
  // If the string does not exist as a key within the map object, set it as a key and set the occurrence to 1
  sortedStringsInArray.forEach((item) => {
    if (map[item]) map[item] += 1;
    if (!map[item]) map[item] = 1;
  });

  // Iterate through the keys of the map object and return a new array of strings that have occurrences higher than 1
  const answer = Object.keys(map).filter((value) => {
    if (map[value] > 1) return value;
  });

  return console.log(answer);
}

const text = ["code", "aaagmnrs", "anagrams", "doce", "doce", "something else"];

funWithAnagrams(text);
