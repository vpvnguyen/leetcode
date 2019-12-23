// jimmy

// declare a function called twosum

const twoSum = (array, number) => {
    // return an array
    // filter out numbers > target
    const shortList = array.filter(value => value < number);

    return shortList.reduce((acc, curr, index, array) => {
        // use acc to track current index
        // acc = 0
        // curr = array[0]
        return acc;
    }, [0, 1]);
};

const array = [12, 2, 5, 8];
const target = 10;

console.log(twoSum(array, target))