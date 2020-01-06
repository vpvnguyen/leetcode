// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// pseudo
// create an empty array to hold chunks called 'chunked'
// for each element in the 'unchunked' array,
// - retrieve the last element in 'chunked'
// - if last element does not exist, or if its length is equal to chunk size,
// -- push a new chunk into 'chunked' with the current element
// - else, add the current element into the chunk

// create vars for array and chunk size
const array = [1, 2, 3];
const size = 2;

// create var to hold each chunk
const chunked = [];

const chunk = (array, size) => {
  for (let chunks of array) {
    if (array.length > size) {
      chunked.push(chunks);
      console.log(chunked);
    }
  }
};

chunk(array, size);
