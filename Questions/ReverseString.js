// Question 3: Reverse a String
// Task: Implement a function reverseString(str) that takes a string as input and returns it reversed. For example, reverseString("hello") should return "olleh".


function reverseString(str) {
    var reversedStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString("hello"));  // "olleh"
