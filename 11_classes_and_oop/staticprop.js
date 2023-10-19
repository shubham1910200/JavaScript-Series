class User{
    constructor(username)
    {
        this.username = username
    }
    logMe()
    {
        console.log(`username: ${this.username}`);
    }
    static createId()
    {
        return `123`
    }
}

const user = new User('shubham')
console.log(user.createId());