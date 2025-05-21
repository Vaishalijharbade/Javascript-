// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers (23,344)

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}

const result = addTwoNumbers(34,232)

// console.log("Result:", result)

// function loginUserMessage (username){
//     return `${username} just logged in`
// }

// console.log (loginUserMessage ("hitesh"))

// function loginUserMessage (username){
//     if(username === undefined){
//         console.log("Please enter a username")
//             return
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("vaishlai"))

//professional code

// "" => empty string ko maan liya jaata hai ki woh false value hai, in the same way
// "undefined" ko bhi maan liya jaata hai ki woh false value hai but in if else statement if we use
// undefined tab toh woh execute hi nhi hoga, toh jo username hai usko ulta kardo then it will work

function loginUserMessage(username){
    if (!username){
        console.log("Please enter a username")
        return
    }

}
// console.log(loginUserMessage())

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(454545,445454,45454,45454));

//Also

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(45,4542,63,78));

const user={
    username:"vaishali",
    price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user) //calling function

handleObject({//calling function
    username:"Vaish",
    price:5656
})

const myNewArray =[200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))