
function SetUsername(username)
{

    this.username = username
    console.log('called');
}

function createUser(username,email,password)
{
    SetUsername.call(this,username) // call are used to hold the reference of function.because after call the function it will delete 
    this.email = email
    this.password = password
}

const chai = new createUser('chai','shubham@gmail.com','123')
console.log(chai);