// Closures in JavaScript are a powerful concept that allows a function to retain access to its lexical scope, even when the function is executed outside of that scope.

// Lexical Scope: The inner function has access to the variables defined in its parent scope (in this case, createCounter).
// Private Variables: The variable count is private to the createCounter function. It cannot be accessed directly from outside the function; it can only be modified through the returned function.
// State Preservation: Closures allow us to create functions that maintain state between calls, which is useful in many programming scenarios.


function createCounter() {
    var count = 0; // This variable is enclosed by the inner function

    return function() {
        count += 1; // The inner function can access and modify 'count'
        return count; // Return the updated count
    };
}

var counter = createCounter(); // Create a new counter

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
