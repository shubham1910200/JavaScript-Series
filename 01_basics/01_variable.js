const accountId = 123;  // We can't change the value
let accountEmail = "Shubham"; // we can change the value
var accountPassword = '1234'; // we can change the value
accountCity = "Aligarh";

// accountId = 12 not allowed
accountEmail = "Sachin" // allowed
console.log(accountEmail)
console.log(accountId)
console.log(accountPassword)
console.log(accountCity)

// let is a block of scope. we can't accsess the value outside the block
if(true)
{
   let x = 10 //error
}
// console.log(x)

// var is functional scope. we can't access the value outsie the function
