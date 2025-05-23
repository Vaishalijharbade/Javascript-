const user={
    username: "hitesh",
    price:9999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)//when we are referring to the current context we use this keyword
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username="vaishali"
// user.welcomeMessage()


// console.log(this)//will give empty object in vs code but gives window objects in the browser


// const chaii = function(){
//     let username = "Vaish"
//     console.log(this.username)
// }

// chaii()  //output is undefined due to the scope of user

const chaii = () => {
    let username = "vaish"
    console.log(this)
}
chaii() //{}

/*  Arrow func v/s normal function
Arrow function
this inside the arrow function doesn't refer to chaii or any new context.

It takes this from its lexical parent, i.e., where the function is defined.

In the global scope:

In a browser: this → window

In Node.js: this → {} (empty object)

Normal functions

this in a regular function depends on how the function is called.

If called normally like chaii(), then:

In a browser, this → window (non-strict mode)

In strict mode, this → undefined

In Node.js, this → the global object (global)*/

// const addTwoNum =(num1 ,num2) => {
//     return num1 + num2
// }

// console.log(addTwoNum(54,87))

// const add = (num1,num2) => (num1 + num2) //implicit return

// console.log(add(4545,875875))

// const addTwo = (num1,num2) => {username:"vaishali"}//gives undefined,for returning object we have to wrap it in parenthesis()
// console.log(addTwo(45,34))

const addTwo = (num1,num2) => ({username:"vaishali"})//for returning object we have to wrap it in parenthesis()
console.log(addTwo(45,34))

