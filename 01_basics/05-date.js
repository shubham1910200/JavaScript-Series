// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString());

let mytimestamp = Date.now()
console.log(myCreateDate.getTime())
console.log(myCreateDate.getDay());