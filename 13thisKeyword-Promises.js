const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

person.greet(); // "Hello, my name is Alice"

const person2 = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    },
};

person2.greet(); // "Hello, my name is undefined"

// arrow func don't have their own 'this' context
// they inherit 'this' from the parent scope (which is global/window here)
// so 'this.name' is undefined because global scope doesn't have a 'name' property


// Promise is an object that represents the eventual completion
// or failure of an asynchronous operation.

const myPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
});

myPromise.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("always runs")
})

const promise1 = Promise.resolve(3); // resolves immediately with 3
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "foo")); // resolves after 100ms with "foo"
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 500, "bar")); // rejects after 500ms with "bar"

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // 'll not run due to promise3 rejecting
  })
  .catch((error) => {
    console.error(error); // "bar" - catches the first rejection
  });

// run node 13thisKeyword-Promises.js in the terminal