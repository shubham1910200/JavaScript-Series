const marvel_heroes = ["thor",'marvel','spiderman','IronMan']
const dc = ["superman","batman","flash"]

/*
marvel_heroes.push(dc)
console.log(marvel_heroes);  // It push whole Array . like array inside array. It push element in existing array
console.log(marvel_heroes.length) //5

console.log(marvel_heroes[4][1]);  //batman

*/
console.log(marvel_heroes.concat(dc)); // It give in single array. It return new array

const all_new_hero = [...marvel_heroes,...dc]
console.log(all_new_hero);  // It give like concat.  we can used for multiple value.

const another_array = [23,463,1,6,64,2,[3,6,1,[3]],9,[82,62,72]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);  // It give in single array 


console.log(Array.isArray(marvel_heroes)); // It  used to check the array
console.log(Array.from("Shubham")); // It used to convert in Array

// console.log(Array.from({item:'amazon'}));  // intersting. convert only key or value

const score1 = 100;
const score2 = 150;
const score3 = 500;
console.log(Array.of(score1,score2,score3))


