const score = 400
console.log(score);

const balance = new Number(100)
console.log(typeof balance); 
console.log(balance.toString());  // String
console.log(balance.toFixed(2)); // after decimal put zero

const hundereds = 100000
console.log((hundereds.toLocaleString())); 

// +====+++++++++++++++++++++++++++++++++++++===++++++++++++++++++ 

console.log(Math);  // It object where many propeties are store
console.log(Math.abs(-4)); // It convert negative value in positve
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));  // It takes bigger number
console.log(Math.floor(4.6)); // It takes lower value
console.log(Math.min(2,5,1,6)); // minium value
console.log(Math.random()); // value comes between 1 and 0
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max-min +1)+min)))
