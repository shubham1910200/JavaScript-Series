// for loop

for (let i = 0; i < 10; i++) {
    
    if(i==5)
    {
        console.log("5 is best");
    }
    console.log(i);
    
}

for (let index = 0; index <=4; index++) {
    console.log(`Outer loop = ${index}`);
    for (let i = 0; i <=4; i++) {
        const element = i;
        console.log(`'Inner loop ${element}`);

        
    }
    
}

let myArray = ['flash','batman','superman']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}

// break and continue

for (let index = 1; index<=20; index++) {
    if(index==5)
    {
        console.log('Detected 5')
        // break
        continue
    }
    else
    {
        console.log(`Value of i is ${index}`);
    }

    
}