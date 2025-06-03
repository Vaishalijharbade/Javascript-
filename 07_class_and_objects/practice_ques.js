/* Q1.You are creating a website for your college. Create a class User with 2 properties,
name and email.It also has a method called viewData() that allows user to view website data. */

/* Create a new class called Admin which inherits from User.Add a new method called editData to Admin that allows 
it to edit website data*/

let DATA = "confidential information"

class User{
    constructor (name,email){
        this.name = name;
        this.email= email;
    }
    viewData(){
        console.log(`Data = ${DATA}`)
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
        editData(){
            DATA= "some new value";
        }
}
let student1 = new User("Vaishali","abc@google.com")
let student2 = new User("Bhawesh","kdj@gmail.com")
console.log(student1)
console.log(student2)
console.log(student1.viewData())
let admin1 = new Admin("riya","hjfjh")
console.log(admin1)