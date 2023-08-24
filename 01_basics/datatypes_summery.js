// Stack is used the primitive data types and heap is used the non primitive data types.
/* Primitve data types is created the copy.means If changes in variable does not affect the original value
*/
let name = "Shubham";
let anothername = "Rajpoot";
anothername = name;
console.log(anothername); 

/* In heap We get the reference of variable. means if we changes in reference variable also affect the original value
*/
let user = {
    email:'shubham@gmail.com',
    upi:"user@1"
}

let userTwo = user;
userTwo.email = "Sachin"
console.log(userTwo);
