// Node Package Manager (NPM) is used in JS projects in order to handle different dependencies
// npm init -y (creates package.json)
// npm install prompt-sync (creates package-lock.json and node_modules)

const prompt = require("prompt-sync")() // import prompt-sync to get user input
const v = prompt("type something: ") // store the input in variable 'v'
console.log(v)

// run node 2UserInput-In-Node.js in the terminal
