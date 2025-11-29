// == (loose equality)
// === (strict equality)

console.log("1" == 1) // true
console.log("1" != 1) // false
console.log(true == 1) // true
console.log(true == undefined) // false
console.log(null == undefined) // true
console.log(null == false) // false (saw that coming?)
console.log(undefined == false) // false
console.log(undefined == true) // false
console.log("" == 0) // true
console.log("1,2" == [1,2]) // true

console.log("1" === 1) // false
console.log("1" !== 1) // true
console.log(undefined === null) // false
console.log(undefined === "") // false

console.log("1" < 2) // true
console.log("3" < 2) // false


console.log(true && false) // false
console.log(true || false) // true
console.log(!(true || false)) // false

console.log("hello" || true) // hello
console.log(true || "") // true
console.log(false || "") // false
console.log("hello" || "") // hello

console.log(true && "hello") // hello
console.log(false || "hello") // false
console.log(Boolean("hello") && Boolean(2)) // true 


if (true) console.log("hello world")
else console.log("run")

const cond = 2 < 3 ? "okay cool" : "no"
console.log(cond)

const value = 3

switch (value) {
    case 3:
        console.log("3 is cool")
        break;
    case 4:
        console.log("4 is not cool")
        break;
    default:
        console.log("okay")
        break;
}

// run node 5Operators-Conditions.js in the terminal