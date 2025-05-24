const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map( (num) => num + 10)
const newNums = myNumbers
        .map((num)=> num * 100)//chaining
        .map((num)=> num +2)
        .filter((num)=> num < 500)
console.log(newNums)