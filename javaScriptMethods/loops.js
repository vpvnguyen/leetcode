const array = [1, 2, 6, 4, 9];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(`\n forEach Method`)
const forEachMethod = array.forEach((item, index, array) => {
    console.log(item, index, array)
});

console.log(`\n map Method`)
const mapMethod = array.map((item, index, array) => {
    console.log(item, index, array)
});

console.log(`\n reduce Method`)
// syntax: arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const reduce = array.reduce((accumulator, currentVal, currentIndex, array) => {
    console.log(accumulator, currentVal, currentIndex, array)
});
console.log(array.reduce(reducer, 10));

console.log(`\n filter Method`)
// syntax: let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
const filterMethod = words.filter((element, index, array, thisArg) => {
    console.log(element, index, array, thisArg)
});
