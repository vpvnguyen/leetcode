// Use key/value Pairs Solution
// Instead of thinking the sum of index1 + index2 = target, we can think of index2 = target - index1, then look for index2 in the key/value object which we will store the array values as keys, and array index as value.

// The lookup time in objects or hash tables is O(1) constant time, therefore, this implementation improves the time complexity to O(N).

// Pseudo code:

// create an empty object
// iterate the array with a for loop
// let num2 = target - num1 (the num2 is the number we want to lookup for in the object)
// on each iteration add the value/pair to the object
// if the num2 is in the object, we have found it, return the indexes and the sum

function twoSum(numArray, target){

  const numObject = {} //create an empty object

  for(let eachNum in numArray){

    const otherNum = target - numArray[eachNum]

    if(otherNum in numObject){

      return `${otherNum} + ${numArray[eachNum]} = ${target}`
    }

    numObject[numArray[eachNum]] = eachNum

//adding key/value has to go after the if statement to avoid adding the same index twice.
  }

  return "target not found"
}

console.log(twoSum([1,2,3,4,5], 8))  //output: '3 + 5 = 8'

console.log(twoSum([1,2,3,4,5], 10)) //"target not found"