const student= {
    fullName:"Vaishali",
    Marks:98,
    printMarks: function(){
        console.log(this.Marks)
    }
}
// console.log(student.fullName)
// console.log(student.Marks)
// console.log(student.printMarks())

let arr=['apple','mango','banana']
console.log(typeof arr)


//we can make our own prototypes:"__proto__"
const employee = {
    calcTax(){
        console.log("tax rate is 2%")
    },
};

const Vaishali={
    salary:80000,
    calcTax(){
        console.log("Tax rate is 20%")//if object and prototype have same method, object's method will be used
    }
}

Vaishali.__proto__= employee;