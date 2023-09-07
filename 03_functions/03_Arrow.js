const user = {
    name:'Shubham',
    price:199,
    welcomeMessage: function()
    {
        console.log(`${this.price} , welcome to website`); // this keyword refers the current context(value).
        console.log(this); //  It refers to the user object. because we in object.
    }
}
user.welcomeMessage()
user.price=200
user.welcomeMessage() // 200. because we changed the context value.

console.log(this); // {} because we are in node enviournment so this keyword refers to the node env'n. because their is no context in global.

/*
function chai()
{
     let username = 'sachin'
    console.log(this.username); // undefined.because the context is work in object.
}
 
const chai = function()
    {
        let username = 'shubham'
        console.log(this) // it give same work like normal function
    }

*/

/*********************Arrow Function*****************************/

const chai = ()=>
{
    let username = 'shubham'
    console.log(this) // In this 'this' keyword refers to empty object.
}
chai()

const addTwo = (num1,num2)=>
{
    return num1+num2; // Explicity return
}
console.log(addTwo(3,4));

// another way write arrow function
const addThree = (num1,num2,num3) => num1+num2+num3  // emplicity return
// or const addThree = (num1,num2,num3)=>(num1+num2+num3)
console.log(addThree(1,2,3));
// Note : when We wrap curcly braces we must write the return keyword. but we are not wrap not wrap arrow function curly braces does need to write return keyword.

const object = ()=>({username:'sai'})  // used the object in arrow function we must wrap in parenthesis.
console.log(object());



/****************************interviw********************************************/
// Window object is avialable in brower. when we run this globally it refers the the window object. 
