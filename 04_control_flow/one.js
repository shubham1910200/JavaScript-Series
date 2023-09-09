// if

/* 
if(condition(true))
{

}
*/
const isUserloggedIn = false
if(isUserloggedIn)
{
    console.log("Hello");
}
else
{
    console.log("Bye");
}

// for check the value = <,>,<=,>=,==,!=,===(strict equal)

const score = 200;
if(score>100)
{
    let power = "fly"
    console.log(`User power:${power}`);
}

// Shorthand properties
if(score>199) console.log("score is ",score); // we are not used this

const isUserloggedin = true;
const debitcard = true;
if(isUserloggedin && debitcard)
{
    console.log('Allow to buy course');
}