const myObject = {
    js:'Javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'Apple'
}

for (const key in myObject) {
    console.log(key); // print key
    console.log(myObject[key]) // print object
}


const programming = ['JS','CPP','JAVA','PYTHON','CSS','HTML']
for (const key in programming) {
   console.log(key);   // it give the key
   console.log(programming[key]);
}

/* Diffence b/w for Each and For in */
/* For each give the value directy and for in give value through key */



const map = new Map()  
map.set('IN',"India")
map.set('USA','United States of America')
map.set('SA','South Afirica')

// We can't iterate the map in for in 
// for (const key in map) {
//     console.log(key);
// }


const coding = ['js','ruby','java','python']

// coding.forEach(function(val){
//     console.log(`value is ${val}`);
// })

// forEach(callback fun)

coding.forEach((item)=>{
    console.log(item);
})

// Another way 

function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe)

//------------------------------------------------------------------------------
//In for have two another optional parameter  index, arr
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding  = [
    {
        language:'javascript',
        languageFileName:'Js'
    },
    {
        language:'java',
        languageFileName:'Ruby'
    },
    {
        language:'Python',
        languageFileName:'Cpp'
    }
]

myCoding.forEach((item)=>
{
    console.log(`langeuage is: ${item.language} | languageFileName is : ${item.languageFileName}`);
})


const web = ['html','css','javascript','react']
const value = web.forEach((item)=>{
    return item  // undfined. for each does not return the valuwe
    
})
console.log(value);

// To return the value we used the filter.

const myNums = [1,2,3,4,5,7,8,9,10]
const newNums = myNums.filter((item)=> item>4)
console.log(newNums);
/* note => when we used the scope we must return the value
const newNums = myNums.filter(item)=>{
    return item>4
}
console.log(newNums)
*/

