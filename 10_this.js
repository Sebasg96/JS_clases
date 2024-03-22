//this in JS as self in PY - enlace implicito

const dogHouse = {
    dogName : "Saul",
    dogGreetings : function(){
        console.log(`Hi my name is ${this.dogName}, Wao`)
    } 
}
console.log(typeof(dogHouse.dogGreetings()))



//Vincular funcion a objeto -> method en objeto function.call(object)
//enlace explicito 

function carMaxSpeed(regularSpeed){
    const MaxSpeed = this.regularSpeed * 1.75
    return console.log(MaxSpeed)
}

function carGasConsumption(engine){
    const gasConsumption = this.engine / 800
    return console.log(`This ${this.type} uses ${gasConsumption}L per mile `)
}

const Car ={
    type: "car",
    brand : "BMW",
    year : 2023,
    regularSpeed : 100,
    engine : 2000
}

carMaxSpeed.call(Car)


const bus = {
    type: "bus",
    brand : "Mercedes Benz",
    year : 2022,
    regularSpeed : 80,
    engine : 3000
}

carMaxSpeed.call(bus)
carGasConsumption.call(bus)
carGasConsumption.call(Car)

