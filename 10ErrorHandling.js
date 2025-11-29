function checkAge(age) {
    try {
        if (age < 18) {
            throw new Error("Must be 18 or older");
        }
        console.log("Access granted!");
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Check complete!");
    }
}

// tests
checkAge(20);  
checkAge(15); 

// run node 10ErrorHandling.js in the terminal