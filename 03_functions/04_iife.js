//iife => Immediate invoked function Expression
/* We used the iife in database connection when our application is start then our database connection is start */

(function chai()  // named iife
{
    console.log('DB connected');
})();
// note => we used always end with semicolon.becuase it tell the function is stoped. If we do not write we can't execute the next line.


((name)=>{   // parameter passed unamed iife
    console.log('DB Two connected', name);
})('shubham')