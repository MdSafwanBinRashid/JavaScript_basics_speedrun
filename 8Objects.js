// JSON - JavaScript Object Notation

const obj = {
    name: "Alice",
    age: 23,
    sayHello: function() {
        return "hello"
    },
    career: {
        post: "Manager",
        dept: "Finance"
    },
    food : {}
}

// delete obj.career
// obj.age = "tim"
obj.Family = ["Bob","Joyce"] // add new properties

console.log(obj['name'])
console.log(obj.sayHello())
console.log(obj) 
// console.log(Object.values(obj))
// console.log(Object.keys(obj))

for (let key in obj) { // use 'in' for objects, 'of' for arrays, maps, sets, etc.
    console.log(key) // console.log(obj[key]) - to access the values
}

const obj2 = {
    hairColor: "black",
    arr: [1, 2, 3],
    name: "Tim"
}

const obj3 = {...obj, ...obj2}  // name is overwritten

obj3.food.nonveg = "goat"
obj3.Family.push("Aline")
console.log(obj, obj3)

const {hairColor, name} = obj3
console.log(hairColor, name)

// run node 8Objects.js in the terminal