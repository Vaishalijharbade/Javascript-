const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc}and currval:${currval}`)
//     return acc + currval
// },0)
const myTotal = myNums.reduce((acc,currval)=>acc + currval,0)

console.log(myTotal)
const shoppingCart = [
    {
        itemName : "rice",
        price:89
    },
    {
        itemName : "potato",
        price:50
    },
    {
        itemName : "tomato",
        price:60
    }
]
const pricetoPay = shoppingCart.reduce((acc,item)=> acc + item.price ,0)
console.log(pricetoPay)