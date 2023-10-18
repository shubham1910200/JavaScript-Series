// three way to use declare object
/*
const obj = new Object({
    name:'shubham'
})

const obj1 = new obj();
const obj2 = {

}

*/

const obj = {
    name:'Shubham',
    getName:function()
    {
        return this.name;
    }
}

const obj2 = {
    roll:121,
    // name:'sachin', // obj2 value ko bottom to top access krta hai. to ye firstly sachin print krega
    __proto__:obj
}
// console.log(obj2.getName());


const obj3 = {
    class:'MCA',
    __proto__:obj2
}
// console.log(obj3);

//---------------------------------------------------------------------------------------------------------------

const array = ["Shubham"]
array.push('Sachin')
// console.log(array);

// create own prototype method
Array.prototype.convertIntoObject = function()
{
    const newObj = {};
    array.forEach((ele)=>{
        newObj[ele] = ele;
    })
    return newObj;
}
console.log(array.convertIntoObject());

