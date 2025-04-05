// To print any thing, whether be it a variable or a string.
console.log("This is my first code in JavaScript");
accountEmail = "HelothisisEmail@hc.com"
accountPassowrd = "ThisisPassword"
//To print variables without traversing console/log again and again.
console.table([accountEmail,accountPassowrd])

// Prefer not to use var due to the issue in block scope and functional scope. let is the new thing that helped solve the problem.
let account = "This is my account"
var account2 = "This is my account 2"

// If you dont declare a variable then it will automatically mark it as 'Undefined' and it will be declared as a global variable.