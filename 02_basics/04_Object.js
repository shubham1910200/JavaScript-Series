const course = {
    coursename:'Js in hindi',
    price:"999",
    courseInstructor:"hitesh"
}
const {price} = course  //destrucring
console.log(price);

// we can give the own name
const{courseInstructor:inst} = course;
console.log(inst);

// Json => Both key and  value are in quotes

const api = fetch('https://api.github.com/users/hiteshchoudhary')
.then(response=>response.json())
.then(name=>console.log(name))
