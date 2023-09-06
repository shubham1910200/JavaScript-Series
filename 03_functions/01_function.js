function addTwoNumbers(number1,number2)
{
    console.log(number1+number2);
    
}

const result = addTwoNumbers(10,20)
console.log('Result:',result); // It give undefined. because it does not return anything

function addThreeNumbers(number1=20,number2,number3)
{
    return number1+number2+number3;
}
const addNumber = addThreeNumbers(10,20,30);  
console.log(addNumber); // It return the value. So the answer is 60.

function loginUsername(username = 'shubham')  // WE can give the default parameter to avoid undefined the value.
{
    return username
}

const user = loginUsername()
console.log(user);

//When we want to unlimited parameter 
function calculateCartPrice(...num1)
{
    return num1;
}
console.log(calculateCartPrice(20,30,50));  // The spreat operator is stored in array

/********** Pass the Object in function  **********************/
const User = {
    username:'shubham',
    price:100
}

function handleObject(anyObject)
{
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(User)