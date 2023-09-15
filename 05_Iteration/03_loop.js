
let arr = [1,2,3,4,5]

for (const iterator of arr) {
    console.log(`Value is ${iterator}`);
}

const greetings = "hello world";
for (const greet  of greetings) {
    if(greet!=' ')
    {
        console.log(`Each char is ${greet}`);
    }
}

// Map is a object that holds key value pair. it store unique value

const map = new Map()  
map.set('IN',"India")
map.set('USA','United States of America')
map.set('SA','South Afirica')
// console.log(map);
for (const [key,value] of map) {        
    console.log(`Key are ${key} and Value are ${value}`);
    
}


