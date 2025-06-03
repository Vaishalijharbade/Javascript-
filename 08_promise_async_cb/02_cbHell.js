// function sum(a,b){
//     console.log(a + b)
// }
// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b)
// }
// calculator(1,2,(a,b) =>{
//     console.log(a +b)
// })

function getData(dataId,getNextData){
    setTimeout(() =>{
        console.log(`Data: ${dataId}`)
        if (getNextData){//putting check like in getData(4)there is not any callBaxk there            getNextData();
        }
    },2000);
}

//callback hell

getData(1, ()=>{
    getData(2, () =>{
        getData(3,() =>{
            getData(4) //not a good way of programming
        })
    })
})