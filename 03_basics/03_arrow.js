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


