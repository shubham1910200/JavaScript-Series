/*let a = 10
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);
*/

/* Var is a functional scope. means that can not access outside the function.In var we can redeclared the variable.
but in let we can't redeclared the variable but we can change the value
let is a block of scope */

var c = 300
let a = 200
if(true)
{
    let a = 10
    const b =  20
    var c = 30  // It override the value
}
// console.log(a);   // error because we can't access outside the block
// console.log(b);  //  it give error b is not defined
// console.log(c);   // It can access the  value 
// console.log(a) // 200 because the block scope.both are declared diffrent scope.


/* IN function innerfunction can access the variable of outer function. Everytime function is called it stored in callstack.
 */
function one()
{
    const username = 'shubham'
    function two()
    {
        const website = 'youtube'
        console.log(username); // shubham
    }
    // console.log(website);  // can't access the value.give error undefined variable
    two()
}
one()


/***************************** defined function  ***********************/

console.log(addone(5)); // 6. we can call the function before declaration. because of function hoisting.

function addone(num)
{
    return num+1;
}
// addone(5)
// addTwo(7) // we can't declare the variable. before declaration because of function expresstion is not hoisting.
x
const addTwo = function(num)
{
    return num+2
}
addTwo(2)