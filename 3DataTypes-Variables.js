/* types
        string " " or ' ' or ` `
        boolean true or false
        number 12.34 or 8 or -9 or 0
        undefined (condition where an expression does not have a correct value, altho it is syntactically correct)
        null (use when need to explicitly set something as nothing)
*/ 

var x = "hello"
x = "world"


// let & const are block-scoped, unlike var

if(true) {
        let x = 5 // changeable variable
        x = 7
        x += 1
}
console.log(x) // error, 'cause called outside block

const VELOCITY = 34 // constant variable


function test() {
        console.log(y) // works, but undefined; doesn't work incase of blocks
        var y = 5
        console.log(y)
}

test()

// run node 3DataTypes-Variables.js in the terminal