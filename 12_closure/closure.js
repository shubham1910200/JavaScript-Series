function outer() {
    let outerVar = "I'm from outer function";
  
    function inner() {
      console.log(outerVar); // The inner function can still access outerVar
    }
  
    return inner; // Return the inner function
  }
  
  const closureExample = outer(); // The inner function is stored in closureExample
  closureExample(); // When we call closureExample, it still has access to outerVar
  