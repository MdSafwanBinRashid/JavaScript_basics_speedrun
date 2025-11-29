// const mySet = new Set([1,2,3]);
const mySet = new Set();
mySet.add(1)
console.log(mySet)
mySet.delete(1)
console.log(mySet)
mySet.add(1)
mySet.add(6)
mySet.add(7)
console.log(mySet.has(1))
console.log(mySet.size)

for (const value of mySet) {
    console.log(value)
}

const arr = Array.from(mySet) // const arr = [...mySet]
mySet.clear()
console.log(arr)

const myMap = new Map();
myMap.set(4, "four")
console.log(myMap)

const numberMap = new Map([[1, 'one'], [2, 'two']]);
numberMap.set(5, "five")
numberMap.delete(2)
console.log(numberMap.get(1))
console.log(numberMap.has(1))
console.log(numberMap.size)

for (const [key, value] of numberMap) {
    console.log(key, value);
}

const arr2 = Array.from(numberMap)
console.log(arr2)

myMap.clear()

// run node 9Sets-Maps.js in the terminal