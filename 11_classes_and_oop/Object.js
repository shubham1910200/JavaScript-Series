
function multiplyBy5(num)
{
    return num*5;
}
console.log(multiplyBy5(5));

multiplyBy5.power = 5
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score)
{
    this.username = username
    this.score = score
}
createUser.prototype.increment = function()
{
    return this.score++;
    
}
createUser.prototype.printMe = function()
{
    console.log(`chai price is ${this.score}`);
}
const userOne = new createUser('chai',123);
userOne.printMe()
