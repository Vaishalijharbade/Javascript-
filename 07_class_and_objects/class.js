class ToyotaCar{
    constructor(brand,mileage){
        console.log("creating a new object");
            this.brand= brand;
            this.mileage=mileage;
        
    }
    start(){
        console.log("start")
    }

    stop(){
        console.log("stop")
    }
    
    }




let fortuner = new ToyotaCar("fortuner",100);
console.log(fortuner)
