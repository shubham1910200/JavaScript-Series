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