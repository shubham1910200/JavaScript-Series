const userEmail = "shubham49557@gmail.com"
// it assume true value
if(userEmail)
{
    console.log("Got user email");
}
else
{
    console.log("Don't have user email");
}
// it assume false value
/* 
false,0, -0, BigInt 0n, "",null, undefined, Nan
*/
// truthy values
/* "0", 'false', " ",[], {}, function(){},
*/

// we check the array
const array = [];
if(array.length==0)
{
    console.log("True")
}
else
{
    console.log("false");
}
// we check object
const object = {}
if(Object.keys(object).length==0)
{
    console.log("Object is empty");
}
else
{
    console.log("not empty");
}

/* 
false ==0 (true)
false =='' (true)
0=='' (true)
*/


// Nullish Coalescing Operator(??):null undefined
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
val1 = 5??10
console.log(val1); // 5
let val2;
val2 = null??20
console.log(val2);

// Terniary operator
/* condition? true:false */

const iceteaprice = 100
iceteaprice<=80?console.log('less than 80'):console.log('more than 80');;