// Scope
// Scope refers to the visibility or accessibility of variables in different parts of your code. It defines where variables can be accessed and manipulated. In JavaScript, there are a few types of scope:

// Global Scope:

// Variables declared outside of any function are in the global scope. They can be accessed from anywhere in your code.

var globalVar = "I'm global!";

function showGlobal() {
    console.log(globalVar); // Accessible here
}

showGlobal(); // Outputs: I'm global!

// Function Scope:

// Variables declared inside a function are in the function scope. They can only be accessed within that function.

function localScope() {
    var localVar = "I'm local!";
    console.log(localVar); // Accessible here
}

localScope(); // Outputs: I'm local!
console.log(localVar); // Error: localVar is not defined


// Block Scope:

// Introduced with let and const, block scope refers to variables declared within a block (enclosed by {}), such as in loops or conditionals. These variables can only be accessed within that block.

if (true) {
    let blockVar = "I'm block scoped!";
    console.log(blockVar); // Accessible here
}

console.log(blockVar); // Error: blockVar is not defined


// Lexical Scope
// Lexical scope is a specific type of scope that determines the accessibility of variables based on their location in the source code (hence "lexical"). In JavaScript, lexical scope means that a function's scope is determined by where the function is defined, not where it is called.

// Key Points:
// Nested Functions: If a function is defined inside another function, the inner function has access to the variables of its outer function due to lexical scoping.

function outerFunction() {
    var outerVar = "I'm from outer function!";
    
    function innerFunction() {
        console.log(outerVar); // Accessible here
    }
    
    innerFunction();
}

outerFunction(); // Outputs: I'm from outer function!


// Closure: Closures are created when an inner function retains access to the variables of its outer function even after the outer function has executed. This is a direct result of lexical scoping.

function createCounter() {
    var count = 0;

    return function() {
        count += 1;
        return count;
    };
}

var counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
