// Question 1: FizzBuzz
// Task: Write a function fizzBuzz(n) that takes a number n and returns an array of strings. For numbers from 1 to n:

// Return "Fizz" for multiples of 3.
// Return "Buzz" for multiples of 5.
// Return "FizzBuzz" for multiples of both 3 and 5.
// Return the number itself for all other numbers.

function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);  // Example usage
