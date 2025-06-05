// let promise = new Promise((resolve,reject) =>{
//     console.log("i am a promise")
//     resolve(123)
//         })

        function getData(dataId,getNextData){//APIs does not return the data directly,it return our data in the forms of promises and inside that arrow function our work is done
            return new Promise((resolve,reject) => {
             setTimeout(() =>{
        console.log(`Data: ${dataId}`)
        resolve("Success")
        if (getNextData){//putting check like in getData(4)there is not any callBaxk there            getNextData();
        }
    },6000);
 })
}
let result= getData(123)
console.log(result)//see the output on the browser

