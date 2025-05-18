const name = "Vaishali"
const repoCount = 50

// console.log (name + repoCount) //outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //modern way of string syntax (string interpolation)

//String interpolation is a way to insert variables or expressions into a string.
//  In JavaScript, it’s done using backticks (`) and the ${...} syntax inside template literals. 
// This allows you to build dynamic strings easily without using concatenation. 
// It also supports expressions and multi-line strings for cleaner code.

const gameName = new String ("Vaishalivj")

console.log(gameName[1]);//accessing the key-value pair
console.log(gameName.__proto__);//accessing the prototype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(10))
console.log(gameName.indexOf('j'))

const newString = gameName.substring(1,4)
console.log(newString)

const anotherString = gameName.slice(-8,5)
console.log(anotherString)

const newStringOne = "    vaish   "
console.log(newStringOne)
console.log(newStringOne.trim())//removes the unnecessary spaces

const url = "https://vaish.com/vaish%20jharbade"
console.log(url.replace('%20','_'))
console.log(url.includes('vaish'))


