const arr = [1,2,3,true,"apple"]
const arr2 = new Array(5) // empty array of 5 elements
const arr3 = Array.from("hello") // each char as element

console.log(arr)
console.log(arr2)
console.log(arr3)

arr2[0] = "y"
console.log(arr2) // edited array
console.log(arr2[arr2.length-1]) // last element

arr2[arr2.length] = "test"
console.log(arr2) // add element to the end, like push()

arr2.push(4)
console.log(arr2)

arr2.pop() // remove the last element
console.log(arr2)

arr2.shift() // remove the first element
arr2.unshift("new") // add new at the beginning
console.log(arr2)

console.log(arr2.indexOf("o")) // returns the index of first occurrence
console.log(arr2.lastIndexOf("t")) // returns the index of last occurrence
console.log(arr2.includes("1")) // returns bool

const arr4 = arr.concat(arr3)
console.log(arr4)

const str = arr.join("|")
console.log(str)

const arr5 = arr.slice(1,4)
console.log(arr5)

const arr6 = arr5.splice(1,1) // start index : count
console.log(arr5) // new arr5
console.log(arr6) // removed element


const [x, y] = [1,2] // x = 1, y = 2
console.log(x, y)

const [w, ...z] = [1,2,3,4] // w = 1, z = 2,3,4
console.log(w, z)

const [a,b, ...c] = [1,2,3,4] // a = 1, b = 2, c = 3,4
console.log(a, b, c)


const d = [1, 2, 3, 4]
const e = d  // doesn't create a copy!
e.push("hello")
console.log(d, e)  // same output: [1, 2, 3, 4, "hello"]

const f = [1, 2, 3, 4]
const g = [...f]  // creates a copy
g.push("hello")
console.log(x, y)

const h = [1,2,3,4]
const i = [1,2,3, ...h]
i.push("hello")
console.log(h, i)

// run node 6Arrays.js in the terminal