// class Parents{
//     hii(){
//         console.log("Hey child!")
//     }
// }

// class child extends Parents{}

// let childObj = new child;
// console.log(childObj.hii())

class person{
    constructor(){
        this.species="Homo sapiens"
    }
    sleep(){
        console.log("I sleep")
    }
    eat(){
        console.log("I eat")
     }
     work(){
        console.log("sometimes i work")//got overridded by engineer
     }
}

class engineer extends person{
    work(){
        console.log("awake at nights and build projects")
    }
}
const engObj= new engineer
console.log(engObj.work())//method overriding

let p1= new person;
console.log(p1)
let e1= new engineer
console.log(e1)