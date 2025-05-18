// there are two types of datatypes which are primitive and non primitive

// Primitive

// it has 7 types: string, Number, boolean, null, undefined, symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) //if we even pass the same values in variables still symbol will treat them as two different values

const bigNumber =3438473847387837483374873873n;

// JavaScript is a dynamically typed language, meaning variable types are determined at runtime.
//  You can assign different types to the same variable without errors.
//This flexibility can be powerful but also risky, as type-related bugs can occur more easily.
//  If you want to add static typing to JavaScript, you can use TypeScript, which is a superset of JavaScript that adds optional static typing.

//Reference (Non Primitive)

//it can be Array, Objects and Functions

const student = ["Vaishali","Bhavesh","Pari"]

const myobj ={
    name:"Vaishali",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)

//read from the ECMA documentation

// ++++++++++++++++++++++++++++++++++Memory in JS++++++++++++++++++++++++++++++++++++

//Stack(primitive) and heap(non-primtive)

//In JavaScript, stack memory is used to store primitive values and function call contexts,
//  offering fast access and automatic cleanup as functions complete.
//  In contrast, heap memory is used for storing objects, arrays, and functions,
//  which are larger and more complex structures managed by the garbage collector. 
// While the stack holds references to these objects, the actual data resides in the heap.
//  This separation allows efficient handling of different data types, with stack being limited but fast, and heap being flexible but slower.

let myPetName = "Tomy"

let anotherName = myPetName
anotherName = "sheru"

console.log(anotherName)

console.log(myPetName)//original values doesnot change the copy changes

let userOne = {
    email:"Vaish@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email)
console.log(userTwo.email)

//Both the values got changed as it is taking the same reference

// refer to the screenshot of stack and heap diagram