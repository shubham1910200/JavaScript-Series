// Reduce => 

const array1 = [1,2,3,4,5,6]
const initialvalue = 0;

const mysum = array1.reduce((acc,curr)=>{
    console.log(`Accumlator value ${acc} and ${curr}`);
    return acc+curr;
},initialvalue)
console.log(mysum);

// IN starting in accumlator value is stored of initial value


const shoppingCart = [
    {
        itemName:'mobile dev course',
        price:500
    },
    {
        itemName:'Js course',
        price:1600
    },
    {
        itemName:'web dev course',
        price:1500
    },
]
const cart = shoppingCart.reduce((acc,item)=>item.price+acc,0)
console.log(cart);