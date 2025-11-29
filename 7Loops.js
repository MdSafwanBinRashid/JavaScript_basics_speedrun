do {
    console.log("run")
} while(false)

// while (true) console.log("hello world")

for (let i = 0; i < 10; i++) {
    console.log(i)
}

const arr = [14, 26, 3]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let value of arr) { 
    console.log(value)
}

for (let [i, value] of arr.entries()) {
    console.log(i, value) 
}

// run node 7Loops.js in the terminal