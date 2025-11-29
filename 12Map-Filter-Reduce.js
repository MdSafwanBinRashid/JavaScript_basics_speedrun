const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];

const names = users.map((user) => user.name);
console.log(names); // ["Alice", "Bob"]

const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((acc, num) => acc + num, 0); // 0 is the init val
console.log(sum); // 10

const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter(num => num % 2 == 0);
console.log(evenNumbers); // [2, 4]

// run node 12Map-Filter-Reduce.js in the terminal