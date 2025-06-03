class Person{
    constructor(name){
        this.species="Homo sapiens";
        this.name = name;
    }

    eat(){
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name)//to invoke parent class constructor
    
    }
    work(){
        super.eat();//to access the methods and properties of parent class use super 
        console.log("solve problems,build something")
    }
}
let engObj = new Engineer("Vaishali");
console.log(engObj)
console.log(engObj.work())