// let score = "33abc" //not a number (NaN)
// let score = null //output is 0
let score = undefined //NaN

// console.log ( typeof score);
// console.log ( typeof (score));

let valueInNumber = Number (score)
// console.log ( typeof valueInNumber);
// console.log ( valueInNumber);

//"33"=> 33
//"33abc" => NaN
// true => 1; false =>0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log (booleanIsLoggedIn)

//1=> true; 0 => false
// ""=> false
// "vaishali" => true

let someNumber = 33

let stringNumber = String (someNumber)
console.log(stringNumber);