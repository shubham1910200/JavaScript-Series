/* The Promises object represent the eventual completion or failure of an asynchronous operatio and its resulting value */


const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Aysnc task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// Without create variable

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task 2');
        resolve()
    },1000)
}).then(()=>{
    console.log('Async is resolved');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Chai',email:'chai@gamil.com'})
    },1000)

})
promiseThree.then(function(user){
    console.log(user.username,user.email);
})

// To check error

const promiseFour =  new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = true;
        if(error)
        {
            console.log('Async task 4');
        resolve({username:'shubham'})
        }
        else
        {
            reject('Error is found')
        }
    },1000)
})
promiseFour
.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log(' task is complete or reject');
})


