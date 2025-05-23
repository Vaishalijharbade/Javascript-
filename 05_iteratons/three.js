// forof loop

// ["","",""]  strings in arrays
// [{},{},{}]  objects in arrays

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     // console.log(num);
// }

// const myArray = ["srishty","Vaishali","Vishwa"]
// for (const them of myArray) {
//     // console.log(them)
// }

// // const greetings = "Hello People"
// for (const greet of greetings) {
//     console.log(`Each char is: ${greet}`);
    
// }

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value)
}

const myObject={
     'game1':'NFS',
     'game2':'candycrush'
}
for (const [key,value] of myObject) {//not iterable
    console.log(key,':-',value)
}