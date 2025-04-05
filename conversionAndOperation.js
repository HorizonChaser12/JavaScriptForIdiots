console.log(typeof("Hello this is world!"))

let score = "33abc"
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(valueInNumber) // this will output as NaN as its a bug that has been there in JS for a long time and this usually happens becasue the string that is present in score is actually converted to a number but its not actaully a represetative of a number and thus the out is shown as 'NaN' which stands for Not a Number.
// The same output is given if score is undefined type.
// If the score is a boolean then it will lead to 1 for true and 0 for false.
// Suppose if the value in score was null then the value converted will always lead to 0 as the conversion doesnt happen correctly.


let Var = 1
let booleanVar = Boolean(Var)
console.log(typeof(booleanVar))
// This will correctly convert the value as in above we knew that 1 is for true and 0 is for false.
// Now moving on to the part where Var will be a empty string then it will lead to false but if there is some value inside the string then it will lead to True.