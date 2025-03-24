// This code will run successfully
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

// This code contains multiple errors
function addNumbers(a, b) {
    if (a = 0 || b = 0) {  // Error: using assignment `=` instead of comparison `==`
        return "Both numbers must be non-zero";  // Error: should check `a === 0` instead of assigning
    }
    var sum = a + b;
    conslole.log(sum);  // Error: Typo in `console.log`
    return sum;
}

addNumbers(5, "10"); // Error: passing string instead of number
