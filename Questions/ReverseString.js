// Question 3: Reverse a String
// Task: Implement a function reverseString(str) that takes a string as input and returns it reversed. For example, reverseString("hello") should return "olleh".


var reverseString = function(str) {
    let reversed = '';  // Initialize an empty string to store the reversed string

    // Loop through the original string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];  // Concatenate each character in reverse order
    }

    return reversed;  // Return the reversed string
};