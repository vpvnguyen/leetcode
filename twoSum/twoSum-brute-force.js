function twoSum(numArray, numTarget)
{
 const arraySize = numArray.length;

 for(let i = 0; i < arraySize; i++){

     for(let j= i + 1; j < arraySize; j++){

       if(numTarget - numArray[i] === numArray[j]){

          return `The sum of indices ${i} and ${j} equals ${numTarget}` 
        }
     }
  }
 return "target not found."
}

//calling 

console.log(twoSum([3,2,3], 5))

//returns 'The sum of indices 1 and 2 equals 5'

// twoSum([1,2,3], 6) //returns "target not found"