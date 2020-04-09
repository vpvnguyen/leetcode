// calculate the sum of all numbers from 1 up to n

const addUpTo = (num) => {
  // start the total at 0
  let total = 0;

  // for n numbers, loop through n times and add it to the total
  for (let i = 1; i <= num; i++) {
    total += i;
    console.log(total);
  }

  return total;
};

console.log(addUpTo(3));
