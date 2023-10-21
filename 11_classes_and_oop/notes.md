# Javascript and classes
### Yes, JavaScript introduced classes in <u>ECMAScript 6 (ES6)</u>, which is also known as ES2015. Classes provide a more structured and convenient way to create objects and implement object-oriented programming concepts in JavaScript. Prior to the introduction of classes, JavaScript used <u>prototype-based inheritance.</u>
```javasript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const john = new Person('John', 30);
john.sayHello(); 
```

## OOP
### It is programming pradigm. It provide the structure.
## Object
- collection of properties and methods
## why use OOP
OOP promotes modularity, code reusability, and structured design by representing real-world entities as objects with encapsulated data and behavior.
## parts of OOP
- Oject literal
- Contructor function
- Prototypes
- Instances (new, this)

## 4 pillars
- Abstraction 
- Encapsulation
- Inheritance
- Polymorphism

## Object
- javascript default behaviour is <u> prototyple </u>.
- Note - Every in javascript is a object.
- eg. function,Array,String =>Object => null
## Their are three way to create Object
 ```javascript
   const obj = new Object({
    name:'shubham'
    })

const obj1 = new obj();
const obj2 = {

}
  ```
## important question
- this in window env'n point to window object.
- this in node env'n point to empty {} object.

# bind 
- bind are used to preserve the this value in different context.
```javascript
     const person = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    }
};

const sayHello = person.greet;

// Using bind to preserve the 'this' context
const boundGreet = person.greet.bind(person);
sayHello(); // Outputs: "Hello, undefined!"
boundGreet(); // Outputs: "Hello, Alice!"

```

# getter and setter
- you can use getter and setter methods to control the access to the properties of an object. Getters allow you to retrieve the value of a property, and setters allow you to modify the value of a property, while providing a level of abstraction and control over how the property is accessed or modified.
```javascript
class User
{
    constructor(username,password)
    {
        this.username = username
        this.password = password
    }
    get username()
    {
        return this._username.toUpperCase() // to avoid race condition between method and constructor we used _ beacuse to uniquely indentified
    }
    set username(value)
    {
        this._username = value
    }
}
const shubham = new User('shubham@gmail.com','123')
console.log(shubham.username);

// output: SHUBHAM@GMAIL.COM

```
