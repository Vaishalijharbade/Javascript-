//array

const myArr= [0,1,2,3,4,5]

console.log(myArr[3])//Accessing the elements(zero based indexing)

//Array methods

// myArr.push("Vaishali")
// myArr.push(3)
// myArr.pop() //we give no parameters in pop

myArr.unshift(50)//adds elements at the start causing charnge in the index of the other elements
myArr.shift()//we give no parameters in shift,removes the first element from the array

// console.log(myArr.includes(90))
// console.log(myArr.indexOf(40))
// console.log(myArr)

const newArr = myArr.join()//converts the array into string

// console.log(myArr)
// console.log(newArr)
// console.log( typeof newArr)

//slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)//original array get manipulated
console.log(myn2)
console.log("C",myArr)



//In JavaScript, slice() returns a shallow copy of a portion of an array without modifying the original.
//  In contrast, splice() changes the original array by adding or removing elements and returns the removed items.