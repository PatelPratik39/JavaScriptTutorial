
// Pure function should have always one parameter

// const add = (x, y) => x + y;
// console.log(add(3,6));

// const fullname = (first, last) => ` ${first} ${last}`;
// console.log(fullname('Dave', 'Morry'));

// Impure Example 1
let x=1;
const increment = () => x +=1;
console.log(increment());
console.log(x);

// Impure Example 
const myArray = [1,2,3,4];
const addToArray = (array, data) => {
    array.push(data);
    return array;
}
console.log(addToArray(myArray,6));
console.log(myArray);

// Pure function refactor Example
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(x));
console.log(x);

// Pure function example 2
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);

