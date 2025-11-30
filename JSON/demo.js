/*
JSON (JavaScript Object Notation)

• Data Representation Format
• Commonly Used for APIs and Configs  
• Lightweight and Easy to Read/Write
• Integrates Easily With Most Languages

Used for exchanging data between a server and a web application

JSON files {key:value} OR [value1, value2, value3]

JSON.stringify() = converts a JS object to a JSON string.
JSON.parse() = converts a JSON string to a JS object
Fetching = getting data from other servers to use in your app
*/

const companies = [
    {
        "name": "Big Corporation",
        "numberOfEmployees": 10000,
        "ceo": "Mary",
        "rating": 3.6
    },
    {
        "name": "Small Startup",
        "numberOfEmployees": 3,
        "ceo": null,
        "rating": 4.3
    }];

const jsonString = JSON.stringify(companies);

console.log(companies);
console.log(jsonString);

const jsObject = JSON.parse(jsonString);
console.log(jsObject);

// install the package first: npm install node-fetch
import fetch from 'node-fetch';

// fetch data from GitHub API
fetch('https://api.github.com/users/MdSafwanBinRashid/repos')
  .then(res => res.json()) // convert response to JSON
  .then(repos => {
    // forEach is a built-in arr method that loops through each item!
    repos.forEach(repo => console.log(`📁 ${repo.name}`));
  })
  .catch(error => console.log('Error:', error));

// run node demo.js in terminal