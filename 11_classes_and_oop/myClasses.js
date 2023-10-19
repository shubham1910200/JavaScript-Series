
class User {
    constructor(username,email,password)
    {
        this.username= username;
        this.email = email;
        this.password = password
    }
    encryptPassword()
    {
        return `${this.password}abc`
    }
    ChangeUsername()
    {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai','shubham@gmail.com','123')
console.log(chai.encryptPassword());
console.log(chai.ChangeUsername());

