
const name = "Shubham";
const lastname = "Rajpoot";
const repoCount = 50;
console.log(name + lastname);
console.log(`Hello My name is ${name}`);

// Another way to create new String

const gameName = new String('Sachin')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(name.toUpperCase())   // It not change the Original value
console.log(gameName);
console.log(gameName.charAt(4));

const anotherString = gameName.slice(-6,6)
console.log(anotherString);

const url = "https://shubham.com/shubham rajpoot";
console.log(url.replace('rajpoot','kumar'));