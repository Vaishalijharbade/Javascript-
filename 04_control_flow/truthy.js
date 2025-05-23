const userEmail = []

if(userEmail){
    console.log("Got user Email");
}else {
    console.log("Don't have user email")
}

//falsy values

//false, 0 , -0, BigInt On ,"", null, undefined , NaN

//truthy values
//"0",'false', " ",[], {},function(){}

if (userEmail.length ===0){
    console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length===0){//(Object.keys(emptyObj) return an array
    console.log("Object is empty")
}

// in browser
// false == 0 => true
//false == ''=> true
// 0 == '' => true

//Nullish Caolescing Operator(??): null undefined

let val1 = null;
let val2 =90;
let val = val1 ?? val2


console.log(val)
//If value1 is null or undefined, it returns value2.

// Otherwise, it returns value1.

//Ternary operator

//conditon? true : false

const ricePrize =9000;
ricePrize >= 3838? console.log('less than 9000'):console.log("more than 9000")