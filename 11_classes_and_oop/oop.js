// Object literal
const user = {
    username:'shubham',
    loginCount:8,
    signedIn:true,
    getUserDetails:function()
    {
        console.log(this.loginCount);
        console.log(this); // It give the current context
    }
}
// console.log(user.username);
// user.getUserDetails()
// console.log(this); // it point to the global context.

// Constructor
// const promiseOne = new Promise()
// const date = new Date()

// ------------------------------

function User(username,loginCount,isLoggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function()
    {
        console.log(`welcome ${this.username}`);
    }
    return this;
}

// const userOne = User('shubham',11,true)
// const userTWo = User('sachin',10,true)

// It override the value. two avoid this we used new keyword.it create new instance
const userOne = new User('shubham',11,true)
const userTWo = new User('sachin',10,true)
console.log(userOne);
userOne.greeting()
// when we used new keyword it create new empty object.


