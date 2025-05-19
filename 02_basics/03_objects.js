//There are two ways of defining objects, like literals or like constructor
//Singleton-> when made from a constructor




//Object literals

const mySym = Symbol("key1")

const JsUser={
    name:"vaishali",
    "full name":"Vaishali Jharbade",
    [mySym]:"mykey1",
    age:20,
    location:"Indore",
    email:"Vaish@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Friday","Saturday"]
}

// Accessing the Objects

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

//changing the values

JsUser.email="riya@gmailcom"
// Object.freeze(JsUser) //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greeting2= function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())