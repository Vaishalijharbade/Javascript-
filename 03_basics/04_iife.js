//Immediately Invoked Function Expressions(IIFE)

(function chai (){
    //named iife
    console.log ("Bluetooth connected")
})();

((name) => {
    //unnamed iife
    console.log(`Bluetooth connected 2,${name}`)
})("vaishali");

//when we are writing two iifes together we have to terminate each iife by semicolon(;),
//otherwise it will create an error