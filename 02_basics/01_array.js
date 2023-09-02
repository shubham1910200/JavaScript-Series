// Array is an object that enables to collection of element store in single variable. Array always is create shallow copy.

const myArr = [0,1,3,4,5];
console.log(myArr)

// Another way to create array

const Array1 = new Array(1,2,3,4)
console.log(Array1); // [1,2,3,4]


// Array Method

Array1.push(5) // add in last positon
Array1.pop() // remove last element
Array1.unshift(9) // add 9 fist position
Array1.shift() // remove first value

console.log(Array1.includes(1));  // It check element is available or not
console.log(Array1.indexOf(4)); // It tells index of element

console.log(myArr.join()); // It covert in string

console.log(Array1);

//slice
console.log("A =",Array1);

const myn1 = Array1.slice(1,3)
console.log("slice =",myn1);  [2,4]
console.log(Array1);
const myn2 =Array1.splice(1,3)
console.log(myn2);
console.log("orignal Array",Array1);  
// Splice Array is a manipulate the Original Array.

