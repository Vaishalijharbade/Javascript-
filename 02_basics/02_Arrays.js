const marvel_heroes =["thor","Ironman","Spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])

// const allheroes = marvel_heroes.concat(dc_heroes)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allheroes)

//using spread operator ( dropping a glass and it spreads)

const all_new_heroes =[...marvel_heroes, ...dc_heroes]//can concatenate more elements than the concat operator
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]


const real_another_array= another_array.flat(3);//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array)

console.log(Array.isArray("Vaishali"))
console.log(Array.from("Vaishali"))
console.log(Array.from({name:"hitesh"}))//interesting case Array.from({ name: "hitesh" }) returns [] because the object is not iterable or array-like (no length), so nothing gets converted.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))