// // Singleton object => When created object like constructor

// //object literals
// const mysum1 = Symbol("key1")
// const JsUser = {
//     name:'Shubham',
//     [mysum1]:"key1",
//     age:18,
//     location:"jaipiur",
//     email:'shubham49557@gmail.com',
//     isLoggedIn:false,
//     lastLoginDays:['mon','sat']
// }

// console.log(JsUser['email']); // JsUser.email are same
// console.log(typeof JsUser[mysum1]);
// JsUser.email = 'sachin@gmail.com' // can modiefed the value
// console.log(JsUser.email);

// // Object.freeze(JsUser)  // it freeze the Object where we cannot modifed
// // console.log(JsUser);
// // JsUser.age = 21
// // console.log(JsUser.age); // Using freeze we cannot modified the value

// JsUser.greeting = function()
// {
//     console.log("Hello Js User");
// }
// console.log(JsUser.greeting());

// JsUser.greetingTwo = function()
// {
//     console.log("My name is ",this.name)
// }
// JsUser.greetingTwo()

// //----------------------------------------------------------------//
// const trinderUser = {}
// {

// }
// trinderUser.id = '123abc',
// trinderUser.name = 'shubham'
// console.log(trinderUser);

//-------------------------------------

const regularUser = {
    email:'shubham49557@gmail.com',
    fullname:{
        userfullname:{
            firstname:'shubham',
            lastname:'Rajpoot'
        }
    }
}
// console.log(regularUser.fullname);
console.log(Object.keys(regularUser));  // email ,fullname
console.log(Object.values(regularUser)); // 

// const obj1 = {
//     1:'a',
//     2:'b'
// }
// const obj2 = {
//     3:'a',4:'b'
// }
// const obj3 = {
//     5:'a',6:'b'
// }
// // const obj4 = Object.assign({},obj1,obj2,obj3)
// // or
// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

//----------------------------------------------------------------//
// const users = [
//     {
//         id:1,
//         email:'shubham49557@gmail.com'
//     },
//     {
//         id:2,
//         email2:'sachin2'
//     }
// ]
// console.log(users[1].id); //2


