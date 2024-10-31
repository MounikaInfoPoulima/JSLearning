// Question 2: Palindrome Check
// Task: Write a function isPalindrome(str) that takes a string and checks if it is a palindrome (reads the same backward as forward). Ignore spaces, punctuation, and capitalization.

function isPalindrome(s) {
    var reversed = s.split('').reverse().join('');
    return s === reversed;
}

console.log(isPalindrome("Racecar"));  // true
console.log(isPalindrome("Hello"));    // false
