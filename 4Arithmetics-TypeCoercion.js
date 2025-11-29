const x = 6 // number
const y = "7" // string

// if we use + with string and number, JavaScript converts number to string
console.log(x + y) // output: 67 (string concatenation)
console.log(y + x) // output: 76 
console.log(x + Number(y)) // fix the issue: 6 + 7 = 13

// to convert into string, use String(x) or,
// console.log(x + "") or,
// console.log(x.toString())

const r = "234px"
console.log(parseInt(r) + x) // convert pixels into int, likewise parseFloat


const z = true
console.log(x + z) // 6 + 1 = 7; true == 1, false == 0


// incase of subtraction, multiplication and division, works fine
console.log(x - y)
console.log(x * y)
console.log(x / y)

const w = "hello"
console.log(x * w) // output: NaN

// run node 4Arithmetics-TypeCoercion.js in the terminal