const myNumbers = [1,2,3,4,5,6,7];
const newNums=myNumbers.map((item)=>item+10)
console.log(newNums);  // It store the value in new Array.

// chaining is a when we used multiple method at samet time
const chaining = myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>50)
console.log(chaining);

// Jab bhi chaining hoti hai uska result second chaining main chala jata hai.
