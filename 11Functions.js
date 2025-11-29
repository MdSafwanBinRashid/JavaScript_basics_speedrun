// regular func
function greet(name, age = 12) {
    console.log(`Hello ${name}, age ${age}`);
};

// arrow function with implicit return
const greet2 = (name) => `Hello ${name}`;

// arrow function with explicit return
const greet3 = (name) => {
    return `Hello ${name}`;
};

// func returning another func (closure)
const greet4 = (name) => {
    return () => name;
};

// rest parameters - accept indefinite arguments
const greet5 = (...names) => {
    console.log("Hello", names.join(", "));
};

// rest parameters with numbers
function addNums(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// tests
greet("Alice");                    // Hello Alice, age 12
console.log(greet2("Bob"));        // Hello Bob
console.log(greet3("Charlie"));    // Hello Charlie
console.log(greet4("David")());    // David
greet5("Eve", "Frank", "Grace");   // Hello Eve, Frank, Grace
console.log(addNums(1, 2, 3, 4));  // 10

// run node 11Functions.js in the terminal