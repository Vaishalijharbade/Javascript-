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